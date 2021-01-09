import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SignupPage extends Component {
    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Create new account</h4>
                            <hr/>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" className="form-control"
                                           placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" className="form-control"
                                           placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" className="form-control"
                                           placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" className="form-control"
                                           placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmationPassword">Confirmation Password</label>
                                    <input type="password" id="confirmationPassword" name="confirmationPassword" className="form-control"
                                           placeholder="Confirmation Password"/>
                                </div>
                                <hr/>
                                <div className="form-group">
                                    <button className="btn btn-info btn-block" type="submit">Sign Up</button>
                                </div>
                            </form>
                            <Link to="/login">Have an account? Login now</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;