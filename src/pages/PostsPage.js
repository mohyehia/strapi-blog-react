import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class PostsPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">

                    <div className="col-md-8">

                        <h1 className="my-4">Latest Posts</h1>

                        <div className="card mb-4">
                            <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
                            <div className="card-body">
                                <h2 className="card-title">Post Title</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                                    laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus
                                    possimus, veniam magni quis!</p>
                                <Link to="#" className="btn btn-primary">Read More &rarr;</Link>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on January 1, 2020 by
                                <Link to="#">Start Bootstrap</Link>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
                            <div className="card-body">
                                <h2 className="card-title">Post Title</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                                    laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus
                                    possimus, veniam magni quis!</p>
                                <Link to="#" className="btn btn-primary">Read More &rarr;</Link>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on January 1, 2020 by
                                <Link to="#">Start Bootstrap</Link>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
                            <div className="card-body">
                                <h2 className="card-title">Post Title</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                                    laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus
                                    possimus, veniam magni quis!</p>
                                <Link to="#" className="btn btn-primary">Read More &rarr;</Link>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on January 1, 2020 by
                                <Link to="#">Start Bootstrap</Link>
                            </div>
                        </div>

                        <ul className="pagination justify-content-center mb-4">
                            <li className="page-item">
                                <Link className="page-link" to="#">&larr; Older</Link>
                            </li>
                            <li className="page-item disabled">
                                <Link className="page-link" to="#">Newer &rarr;</Link>
                            </li>
                        </ul>

                    </div>

                    <div className="col-md-4">

                        <div className="card my-4">
                            <h5 className="card-header">Categories</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="#">Web Design</a>
                                            </li>
                                            <li>
                                                <a href="#">HTML</a>
                                            </li>
                                            <li>
                                                <a href="#">Freebies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="#">JavaScript</a>
                                            </li>
                                            <li>
                                                <a href="#">CSS</a>
                                            </li>
                                            <li>
                                                <a href="#">Tutorials</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card my-4">
                            <h5 className="card-header">Side Widget</h5>
                            <div className="card-body">
                                You can put anything you want inside of these side widgets. They are easy to use,
                                and feature the new Bootstrap 4 card containers!
                            </div>
                        </div>

                    </div>

                </div>

            </Fragment>
        );
    }
}

export default PostsPage;