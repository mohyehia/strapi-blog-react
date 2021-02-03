import React, {Component} from 'react';
import {retrieveCategories} from "../redux/action/category_action";
import {connect} from "react-redux";
import {AddComment, Spinner} from "../components";
import {Link} from "react-router-dom";
import {retrievePost} from "../redux/action/post_action";
import moment from "moment";

class ViewPostPage extends Component {
    componentDidMount() {
        this.props.retrieveCategories();
        const slug = this.props.match.params.slug;
        this.props.retrievePost(slug);
    }

    render() {
        const {categories, fetchRequest, post, fetchingPost} = this.props;
        return (
            <div className="row">
                <div className="col-lg-8">
                    {
                        fetchingPost ? (<Spinner/>) : (
                            <React.Fragment>
                                <h1 className="mt-4">{post && post.title}</h1>
                                <p className="lead">
                                    by {post && post.user && <Link
                                    to={`profile/${post.user._id}`}>{post.user.firstName + ' ' + post.user.lastName}</Link>}
                                </p>
                                <hr/>
                                <p>Posted on {post && moment(post.createdAt).format('YYYY-MM-DD hh:mm a')}</p>
                                <hr/>
                                {post && <img className="img-fluid rounded"
                                              src={`${process.env.REACT_APP_API_ENDPOINT + '/' + post.photo}`} alt=""/>}

                                <hr/>

                                <p className="lead">{post && post.content}</p>
                                <hr/>
                                <AddComment slug={this.props.match.params.slug} />
                                {
                                    post && post.comments && post.comments.map(comment => (
                                        <div className="media mb-5">
                                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50"
                                                 alt=""/>
                                            <div className="media-body">
                                                <h5 className="mt-0">{comment.user.firstName + ' ' + comment.user.lastName}</h5>
                                                {comment.content}
                                            </div>
                                        </div>
                                    ))
                                }
                            </React.Fragment>
                        )
                    }
                </div>

                <div className="col-md-4">

                    <div className="card my-4">
                        <h5 className="card-header">Categories</h5>
                        <div className="card-body">
                            {
                                fetchRequest ? (<Spinner marginTop='5%' fontSize='20px'/>) : (
                                    <div className="row">
                                        {
                                            categories.map(category => (
                                                <div className="col-md-12 mb-2">
                                                    <li className="list-unstyled">
                                                        <Link to={`category/${category.id}`}>{category.name}</Link>
                                                    </li>
                                                    <hr className="mb-2 mt-0"/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = ({category, post}) => {
    return {
        fetchRequest: category.attempting,
        categories: category.categories,
        fetchingPost: post.attempting,
        post: post.post
    }
}
const mapDispatchToProps = dispatch => {
    return {
        retrieveCategories: () => dispatch(retrieveCategories()),
        retrievePost: (slug) => dispatch(retrievePost(slug))
    }
}
const ViewPost = connect(mapStateToProps, mapDispatchToProps)(ViewPostPage);
export {ViewPost};