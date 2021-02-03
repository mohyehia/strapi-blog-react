import React, {Component} from 'react';
import {connect} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {RESET_CREATED_FLAG, RESET_ERROR} from "../redux/action/types";
import {addComment} from "../redux/action/comment_action";
import Swal from "sweetalert2";

const initialValues = {content: ''};
const validationSchema = Yup.object({
    content: Yup.string().required('Comment is required is required!')
});

// initialize the toast to be rendered for success or error
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

class AddCommentComponent extends Component {
    onsubmit = (values, actions) => {
        const {slug} = this.props;
        values.postSlug = slug;
        this.props.addComment(values);
        this.actions = actions;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {created, error, message, resetError, resetCreatedFlag} = this.props;
        if (error && this.actions) {
            this.actions.setSubmitting(false);
            Toast.fire({
                icon: 'error',
                title: error
            }).then(() => {
                Toast.close();
            });
            resetError();
        }
        if (created) {
            Toast.fire({
                icon: 'success',
                title: message
            }).then(() => {
                Toast.close();
                resetCreatedFlag();
                window.location.reload();
            });
        }
    }

    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.onsubmit}>
                        {
                            (formik) => {
                                const {errors, touched, isValid, dirty} = formik;
                                return (
                                    <Form>
                                        <div className="form-group">
                                            <Field as="textarea" id="content" name="content" rows="3"
                                                   className={errors.content && touched.content ? 'form-control is-invalid' : 'form-control'}
                                                   placeholder="Comment"/>
                                            <ErrorMessage name="content" component="span"
                                                          className="text-danger"/>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary"
                                                    disabled={!(dirty && isValid)} type="submit">Submit
                                            </button>
                                        </div>
                                    </Form>
                                );
                            }
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({comment}) => {
    return {
        attempting: comment.attempting,
        created: comment.created,
        message: comment.message,
        error: comment.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (values) => dispatch(addComment(values)),
        resetError: () => dispatch({
            type: RESET_ERROR
        }),
        resetCreatedFlag: () => dispatch({
            type: RESET_CREATED_FLAG
        })
    }
}
const AddComment = connect(mapStateToProps, mapDispatchToProps)(AddCommentComponent);
export {AddComment};