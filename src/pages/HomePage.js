import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {retrieveCategories} from "../redux/action/category_action";
import {retrieveAllPosts} from "../redux/action/post_action";
import {connect} from "react-redux";
import {Spinner} from "../components";
import PostComponent from "../components/PostComponent";

class HomePage extends Component {
    componentDidMount() {
        this.props.retrieveCategories();
        this.props.retrieveAllPosts();
    }

    render() {
        const {categories, fetchRequest, userPosts, fetchingPosts} = this.props;
        return (
            <div className="row">

                <div className="col-md-9">

                    <h1 className="my-4">Latest Posts</h1>

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