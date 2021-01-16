import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt=""/>
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Strapi Blog</h1>
                        <p>This is a template that is great for small businesses. It doesn't have too much fancy flare
                            to it, but it makes a great use of the standard Bootstrap core components. Feel free to use
                            this template for any project you want!</p>
                        <Link className="btn btn-info" to="/login">Get Started!</Link>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="container">
                        <h3>Latest Posts</h3>
                        <hr/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Post One</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                                    magni
                                    quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                            </div>
                            <div className="card-footer">
                                <Link to="#" className="btn btn-info btn-sm">More Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Post Two</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel,
                                    non in id dolore voluptates quos eligendi labore.</p>
                            </div>
                            <div className="card-footer">
                                <Link to="#" className="btn btn-info btn-sm">More Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Post Three</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                                    magni
                                    quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                            </div>
                            <div className="card-footer">
                                <Link to="#" className="btn btn-info btn-sm">More Info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const Home = HomePage;
export {Home};