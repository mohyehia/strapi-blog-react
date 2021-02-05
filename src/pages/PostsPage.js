import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PostComponent from "../components/PostComponent";
import {connect} from "react-redux";
import {Spinner} from "../components";
import {retrieveUserPosts} from "../redux/action/post_action";

class PostsPage extends Component {
    componentDidMount() {
        this.props.retrievePosts();
    }

    render() {
        const {userPosts, fetchingPosts} = this.props;
        return (
            <div className="row">

                <div className="col-md-12">

                    <div className="row">
                        <div className="col-md-9">
                            <h1 className="my-4">My Posts</h1>
                        </div>
                        <div className="col-md-3">
                            <Link to="/posts/add" className="btn btn-block btn-outline-info mt-4">Add New Post</Link>
                        </div>
                    </div>

                    {
                        fetchingPosts ? (<Spinner/>) : (
                            <React.Fragment>
                                {
                                    userPosts && userPosts.map(post => (
                                        <PostComponent key={post.id} post={post}/>
                                    ))
                                }
                                <ul className="pagination justify-content-center mb-4 mt-5">
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                </ul>
                            </React.Fragment>
                        )
                    }

                </div>

            </div>

        );
    }
}

const mapStateToProps = ({post}) => {
    return {
        fetchingPosts: post.fetchingPosts,
        userPosts: post.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        retrievePosts: () => dispatch(retrieveUserPosts())
    }
}
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsPage);
export {Posts};