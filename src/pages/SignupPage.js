import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {signup} from "../redux/action/user_action";
import {connect} from "react-redux";
import Swal from 'sweetalert2';
import {RESET_CREATED_FLAG, RESET_ERROR} from "../redux/action/types";

const initialValues = {firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: ''};
const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
    username: Yup.string().required('Username is required!'),
    email: Yup.string().email('Invalid email address!')
        .required('Email address is required!'),
    password: Yup.string()
        .min(6, 'Password must be greater than or equal to 6 characters')
        .required('Password is required!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords does not match!')
        .required('Confirm Password is required')
});

// initialize the toast to be rendered for success or error
const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

class SignupPage extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {created, error, resetCreatedFlag, resetError} = this.props;
        if (error && this.actions) {
            this.actions.setSubmitting(false);
            resetCreatedFlag();
        }
        if (created) {
            // redirect user to login page if his account created successfully
            this.props.history.push('/login');
            Toast.fire({
                icon: 'success',
                title: 'Your account has been created successfully, You can now login with your credentials!'
            }).then(() => {
                Toast.close();
            });
        } else if (error) {
            resetCreatedFlag();
            Toast.fire({
                icon: 'error',
                title: error
            }).then(() => {
                Toast.close();
            });
            resetError();
        }
    }

    onsubmit = (values, actions) => {
        this.props.signup(values);
        this.actions = actions;
    }

    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Create new account</h4>
                            <hr/>
                            <Formik initialValues={initialValues} onSubmit={this.onsubmit}
                                    validationSchema={validationSchema}>
                                {
                                    (formik) => {
                                        const {errors, touched, isValid, dirty} = formik;
                                        return (
                                            <Form>
                                                <div className="form-group">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <Field type="text" id="firstName" name="firstName"
                                                           className={errors.firstName && touched.firstName ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="First Name"/>
                                                    <ErrorMessage name="firstName" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <Field type="text" id="lastName" name="lastName"
                                                           className={errors.lastName && touched.lastName ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Last Name"/>
                                                    <ErrorMessage name="lastName" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="username">Username</label>
                                                    <Field type="text" id="username" name="username"
                                                           className={errors.username && touched.username ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Username"/>
                                                    <ErrorMessage name="username" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <Field type="email" id="email" name="email"
                                                           className={errors.email && touched.email ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Email Address"/>
                                                    <ErrorMessage name="email" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <Field type="password" id="password" name="password"
                                                           className={errors.password && touched.password ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Password"/>
                                                    <ErrorMessage name="password" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirmPassword">Confirmation Password</label>
                                                    <Field type="password" id="confirmPassword"
                                                           name="confirmPassword"
                                                           className={errors.confirmPassword && touched.confirmPassword ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Confirmation Password"/>
                                                    <ErrorMessage name="confirmPassword" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                                <hr/>
                                                <div className="form-group">
                                                    <button className="btn btn-info btn-block"
                                                            disabled={!(dirty && isValid)} type="submit">Sign Up
                                                    </button>
                                                </div>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                            <Link to="/login">Have an account? Login now</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {
        attempting: user.attempting,
        created: user.created,
        error: user.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signup: (values) => dispatch(signup(values)),
        resetCreatedFlag: () => dispatch({
            type: RESET_CREATED_FLAG
        }),
        resetError: () => dispatch({
            type: RESET_ERROR
        })
    }
}
const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupPage);
export {Signup};