import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PostComponent from "../components/PostComponent";
import {connect} from "react-redux";
import {retrieveCategories} from "../redux/action/category_action";
import {Spinner} from "../components";

class PostsPage extends Component {
    componentDidMount() {
        this.props.retrieveCategories();
    }
    render() {
        const {categories, fetchRequest} = this.props;
        return (
            <div className="row">

                <div className="col-md-8">

                    <h1 className="my-4">Latest Posts</h1>

                    <PostComponent/>
                    <PostComponent/>

                    <ul className="pagination justify-content-center mb-4 mt-5">
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                    </ul>

                </div>

                <div className="col-md-4">

                    <Link to="/posts/add" className="btn btn-block btn-outline-info mt-4">Add New Post</Link>

                    <div className="card mt-4">
                        <h5 className="card-header">Categories</h5>
                        <div className="card-body">
                            {
                                fetchRequest ? (<Spinner marginTop='5%' fontSize='20px' />) : (
                                    <div className="row">
                                        {
                                            categories.map(category => (
                                                <div className="col-md-6 mb-2">
                                                    <li className="list-unstyled text-center">
                                                        <Link to={`category/${category.id}`}>{category.name}</Link>
                                                    </li>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
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

const mapStateToProps = ({category}) =>{
    return {
        fetchRequest: category.attempting,
        categories: category.categories
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        retrieveCategories: () => dispatch(retrieveCategories())
    }
}
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsPage);
export {Posts};