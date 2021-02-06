import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PostComponent from "../components/PostComponent";
import {connect} from "react-redux";
import {PaginationComponent, Spinner} from "../components";
import {retrieveUserPosts} from "../redux/action/post_action";

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            postsPerPage: 3
        }
    }

    componentDidMount() {
        this.props.retrievePosts();
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber,
            postsPerPage: 3
        })
    }

    render() {
        const {userPosts, fetchingPosts} = this.props;
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = userPosts.slice(indexOfFirstPost, indexOfLastPost);
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
                                    currentPosts && currentPosts.map(post => (
                                        <PostComponent key={post.id} post={post}/>
                                    ))
                                }
                                <PaginationComponent postsPerPage={this.state.postsPerPage} totalPosts={userPosts.length} paginate={this.paginate} />
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