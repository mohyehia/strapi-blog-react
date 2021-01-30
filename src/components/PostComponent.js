import React, {Component} from 'react';
import {Link} from "react-router-dom";
import moment from "moment";

class PostComponent extends Component {
    render() {
        const {post} = this.props;
        return (
            <div className="card mb-4">
                <img className="card-img-top" src="http://placehold.it/750x300" alt=""/>
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.content}</p>
                    <Link to={`/posts/${post.slug}`} className="btn btn-info">Read More &rarr;</Link>
                </div>
                <div className="card-footer text-muted">
                    Posted on {moment(post.createdAt).format('LL')} by {' '}
                    <Link to="#">Start Bootstrap</Link>
                </div>
            </div>
        );
    }
}

export default PostComponent;