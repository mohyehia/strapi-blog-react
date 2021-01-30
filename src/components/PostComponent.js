import React, {Component} from 'react';
import {Link} from "react-router-dom";
import moment from "moment";

class PostComponent extends Component {
    limitPostContent = (postContent) =>{
        if(postContent.length <= 200) {
            return postContent;
        }
        return postContent.substring(0, 200) + ' ...';
    }
    render() {
        const {post} = this.props;
        return (
            <div className="card mb-4">
                <img className="card-img-top img-thumbnail" src={`${process.env.REACT_APP_API_ENDPOINT + '/' + post.photo}`} alt=""/>
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{this.limitPostContent(post.content)}</p>
                    <Link to={`/posts/${post.slug}`} className="btn btn-info">Read More &rarr;</Link>
                </div>
                <div className="card-footer text-muted">
                    Posted on {moment(post.createdAt).format('DD-MM-YYYY hh:mm a')} by {' '}
                    <Link to="#">Start Bootstrap</Link>
                </div>
            </div>
        );
    }
}

export default PostComponent;