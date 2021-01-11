import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import Swal from "sweetalert2";
import {login} from "../redux/action/user_action";
import {RESET_ERROR} from "../redux/action/types";
import {connect} from "react-redux";

const initialValues = {email: '', password: ''};
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address!')
        .required('Email address is required!'),
    password: Yup.string()
        .min(6, 'Password must be greater than or equal to 6 characters')
        .required('Password is required!')
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

class LoginPage extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isLoggedIn, error, message, resetError} = this.props;
        if(error && this.actions){
            this.actions.setSubmitting(false);
            Toast.fire({
                icon: 'error',
                title: error
            }).then(() => {
                Toast.close();
            });
        }
        if(isLoggedIn){
            resetError();
            this.props.history.push('/');
            Toast.fire({
                icon: 'success',
                title: message
            }).then(() => {
                Toast.close();
            });
        }
    }

    onsubmit = (values, actions) => {
        this.props.login(values);
        this.actions = actions;
    }

    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Login to your account</h4>
                            <hr/>
                            <Formik initialValues={initialValues} onSubmit={this.onsubmit}
                                    validationSchema={validationSchema}>
                                {
                                    (formik) => {
                                        const {errors, touched, isValid, dirty} = formik;
                                        return (
                                            <Form>
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
                                                <hr/>
                                                <div className="form-group">
                                                    <button className="btn btn-info btn-block"
                                                            disabled={!(dirty && isValid)} type="submit">Sign In
                                                    </button>
                                                </div>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                            <Link to="/signup">Don't have an account? Sign Up now</Link>
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
        isLoggedIn: user.isLoggedIn,
        message: user.message,
        error: user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (values) => dispatch(login(values)),
        resetError: () => dispatch({
            type: RESET_ERROR
        })
    }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export {Login};