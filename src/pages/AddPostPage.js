import React, {Component} from 'react';
import {RESET_ERROR} from "../redux/action/types";
import {connect} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {addPost} from "../redux/action/post_action";
import Swal from "sweetalert2";

const initialValues = {title: '', content: '', category: '', photo: ''};
const validationSchema = Yup.object({
    title: Yup.string()
        .required('Title is required!'),
    content: Yup.string()
        .min(5, 'Content must be greater than or equal to 5 characters')
        .required('Content is required!'),
    category: Yup.string()
        .required('Category is required!')
});
// initialize the toast to be rendered for success or error
const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

class AddPostPage extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {created, error, resetError} = this.props;
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
        if(created){
            // redirect user to posts page if post created successfully!
            this.props.history.push('/posts');
            Toast.fire({
                icon: 'success',
                title: 'New post has been created successfully!'
            }).then(() => {
                Toast.close();
            });
        }
    }

    onsubmit = (values, actions) => {
        const formData = new FormData();
        const slug = values['title'].trim().toLowerCase().replace(/\s+/g, '-');
        values.slug = slug;
        formData.append('title', values['title']);
        formData.append('slug', slug);
        formData.append('content', values['content']);
        formData.append('category', values['category']);
        formData.append('files.photo', values['photo']);
        values['photo'] = {};
        formData.append('data', JSON.stringify(values));
        console.log(JSON.stringify(values))
        this.props.addPost(formData);
        this.actions = actions;
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
                                        const {errors, touched, isValid, dirty, setFieldValue} = formik;
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
                                                        <option value="600c12cc4fe3526158b98006">Red</option>
                                                        <option value="green">Green</option>
                                                        <option value="blue">Blue</option>
                                                    </Field>
                                                    <ErrorMessage name="category" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="photo">Photo</label>
                                                    <input id="photo" name="photo" type="file" className="form-control" onChange={(e) => setFieldValue('photo', e.target.files[0])} />
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

const mapStateToProps = ({post}) => {
    return {
        attempting: post.attempting,
        created: post.created,
        error: post.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: (values) => dispatch(addPost(values)),
        resetError: () => dispatch({
            type: RESET_ERROR
        })
    }
}

const AddPost = connect(mapStateToProps, mapDispatchToProps)(AddPostPage);
export {AddPost};