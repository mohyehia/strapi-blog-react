import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PostComponent from "../components/PostComponent";

class PostsPage extends Component {
    render() {
        return (
            <div className="row">

                <div className="col-md-8">

                    <h1 className="my-4">Latest Posts</h1>

                    <PostComponent />
                    <PostComponent />
                    <PostComponent />

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

                    <Link to="/posts/add" className="btn btn-block btn-outline-info mt-4">Add New Post</Link>

                    <div className="card mt-4">
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

        );
    }
}

const Posts = PostsPage;
export {Posts};