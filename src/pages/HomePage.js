import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {retrieveCategories} from "../redux/action/category_action";
import {retrieveAllPosts} from "../redux/action/post_action";
import {connect} from "react-redux";
import {PaginationComponent, Spinner} from "../components";
import PostComponent from "../components/PostComponent";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            postsPerPage: 3
        }
    }

    componentDidMount() {
        this.props.retrieveCategories();
        this.props.retrieveAllPosts();
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber,
            postsPerPage: 3
        })
    }

    render() {
        const {categories, fetchRequest, userPosts, fetchingPosts} = this.props;
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = userPosts.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <div className="row">

                <div className="col-md-9">

                    <h1 className="my-4">Latest Posts</h1>

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

                <div className="col-md-3">

                    <div className="card mt-4">
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
        fetchingPosts: post.fetchingPosts,
        userPosts: post.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        retrieveCategories: () => dispatch(retrieveCategories()),
        retrieveAllPosts: () => dispatch(retrieveAllPosts())
    }
}
const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export {Home};