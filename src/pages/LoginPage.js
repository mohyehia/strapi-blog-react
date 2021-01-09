import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LoginPage extends Component {
    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Login to your account</h4>
                            <hr/>
                            <form>
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
                                <hr/>
                                <div className="form-group">
                                    <button className="btn btn-info btn-block" type="submit">Sign In</button>
                                </div>
                            </form>
                            <Link to="/signup">Don't have an account? Sign Up now</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Login = LoginPage;
export {Login};