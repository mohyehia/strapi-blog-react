import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PostComponent extends Component {
    render() {
        return (
            <div className="card mb-4">
                <img className="card-img-top" src="http://placehold.it/750x300" alt=""/>
                <div className="card-body">
                    <h2 className="card-title">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                        laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus
                        possimus, veniam magni quis!</p>
                    <Link to="#" className="btn btn-info">Read More &rarr;</Link>
                </div>
                <div className="card-footer text-muted">
                    Posted on January 1, 2020 by
                    <Link to="#">Start Bootstrap</Link>
                </div>
            </div>
        );
    }
}

export default PostComponent;