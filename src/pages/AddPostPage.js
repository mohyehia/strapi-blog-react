import React, {Component} from 'react';
import {RESET_ERROR} from "../redux/action/types";
import {connect} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";

const initialValues = {title: '', content: '', category: ''};
const validationSchema = Yup.object({
    title: Yup.string()
        .required('Title is required!'),
    content: Yup.string()
        .min(5, 'Content must be greater than or equal to 5 characters')
        .required('Content is required!'),
    category: Yup.string()
        .required('Category is required!')
});

class AddPostPage extends Component {
    onsubmit = (values, actions) => {
        // this.props.login(values);
        // this.actions = actions;
        console.log(values);
    }

    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add New Post</h4>
                            <hr/>
                            <Formik initialValues={initialValues} onSubmit={this.onsubmit}
                                    validationSchema={validationSchema}>
                                {
                                    (formik) => {
                                        const {errors, touched, isValid, dirty} = formik;
                                        return (
                                            <Form>
                                                <div className="form-group">
                                                    <label htmlFor="title">Title</label>
                                                    <Field type="text" id="title" name="title"
                                                           className={errors.title && touched.title ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Title"/>
                                                    <ErrorMessage name="title" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="content">Content</label>
                                                    <Field as="textarea" id="content" name="content" rows="4"
                                                           className={errors.content && touched.content ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Content"/>
                                                    <ErrorMessage name="content" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="category">Category</label>
                                                    <Field as="select" id="category" name="category"
                                                           className={errors.category && touched.category ? 'form-control is-invalid' : 'form-control'}>
                                                        <option value="">Select Category</option>
                                                        <option value="red">Red</option>
                                                        <option value="green">Green</option>
                                                        <option value="blue">Blue</option>
                                                    </Field>
                                                    <ErrorMessage name="category" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="photo">Photo</label>
                                                    <input id="photo" name="photo" type="file" className="form-control" />
                                                    <ErrorMessage name="photo" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <hr/>
                                                <div className="form-group">
                                                    <button className="btn btn-info btn-block"
                                                            disabled={!(dirty && isValid)} type="submit">Save
                                                    </button>
                                                </div>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                            <Link to="/posts">Back To Posts</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        resetError: () => dispatch({
            type: RESET_ERROR
        })
    }
}

const AddPost = connect(mapStateToProps, mapDispatchToProps)(AddPostPage);
export {AddPost};