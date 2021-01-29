import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {updateUserProfile} from "../redux/action/user_action";
import {RESET_ERROR} from "../redux/action/types";
import Swal from "sweetalert2";
import {Spinner} from "./SpinnerComponent";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
    phone: Yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid!')
        .min(10, 'Phone number must be 10 digits')
        .max(10, 'Phone number must be 10 digits'),
    mobile: Yup.string().required('Mobile is required').matches(phoneRegExp, 'Mobile is not valid!')
        .min(11, 'Phone number must be 11 digits')
        .max(11, 'Phone number must be 11 digits'),
    job: Yup.string().required('Job is required!'),
    address: Yup.string().required('Address is required!')
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

class ProfileInfoComponent extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {updated, error, resetError} = this.props;
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
        if (updated) {
            this.actions.setSubmitting(true);
            Toast.fire({
                icon: 'success',
                title: 'Your profile updated successfully!'
            }).then(() => {
                window.location.reload();
            });
        }
    }

    onsubmit = (values, actions) => {
        this.props.updateProfile(values);
        this.actions = actions;
    }

    render() {
        const {profile, attempting} = this.props;
        const initialValues = {
            id: profile.id,
            firstName: profile.firstName,
            lastName: profile.lastName,
            phone: profile.phone ? profile.phone : '',
            mobile: profile.mobile ? profile.mobile : '',
            job: profile.job ? profile.job : '',
            address: profile.address ? profile.address : ''
        };
        if(attempting){
            return (
                <Spinner />
            );
        }
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <Formik initialValues={initialValues} onSubmit={this.onsubmit} validationSchema={validationSchema}>
                        {
                            (formik) => {
                                const {errors, touched, isValid, dirty} = formik;
                                return (
                                    <Form>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {profile.email}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <Field type="text" id="firstName" name="firstName"
                                                           className={errors.firstName && touched.firstName ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="First Name"/>
                                                    <ErrorMessage name="firstName" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <Field type="text" id="lastName" name="lastName"
                                                           className={errors.lastName && touched.lastName ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Last Name"/>
                                                    <ErrorMessage name="lastName" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone</label>
                                                    <Field type="text" id="phone" name="phone"
                                                           className={errors.phone && touched.phone ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Phone"/>
                                                    <ErrorMessage name="phone" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="mobile">Mobile</label>
                                                    <Field type="text" id="mobile" name="mobile"
                                                           className={errors.mobile && touched.mobile ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Mobile"/>
                                                    <ErrorMessage name="mobile" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="job">Job</label>
                                                    <Field type="text" id="job" name="job"
                                                           className={errors.job && touched.job ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Job"/>
                                                    <ErrorMessage name="job" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="address">Address</label>
                                                    <Field type="text" id="address" name="address"
                                                           className={errors.address && touched.address ? 'form-control is-invalid' : 'form-control'}
                                                           placeholder="Address"/>
                                                    <ErrorMessage name="address" component="span"
                                                                  className="text-danger"/>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <button className="btn btn-info btn-block"
                                                            disabled={!(dirty && isValid) || this.props.updated} type="submit">Update Profile
                                                    </button>
                                                </div>
                                            </div>
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


const mapStateToProps = ({user}) => {
    return {
        attempting: user.attempting,
        error: user.error,
        updated: user.updated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateProfile: (values) => dispatch(updateUserProfile(values)),
        resetError: () => dispatch({
            type: RESET_ERROR
        })
    }
}
const ProfileInfo = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoComponent);
export {ProfileInfo};