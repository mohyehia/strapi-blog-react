import {
    ADD_POST_FAILED,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS, RETRIEVE_POST_FAILED, RETRIEVE_POST_REQUEST, RETRIEVE_POST_SUCCESS,
    RETRIEVE_POSTS_FAILED,
    RETRIEVE_POSTS_REQUEST, RETRIEVE_POSTS_SUCCESS
} from "./types";
import {addPostApi, retrievePostApi, retrieveUserPostsApi} from "../../api/post.api";

export const addPost = (values) =>{
    return async function(dispatch) {
        dispatch({
            type: ADD_POST_REQUEST
        });
        await addPostApi(values)
            .then(response =>{
                console.log(response);
                dispatch({
                    type: ADD_POST_SUCCESS,
                    payload: response
                })
            })
            .catch(error =>{
                console.log('error =>' + error);
                let err;
                if (error.response && error.response.data) {
                    err = error.response.data;
                } else {
                    err = 'Server error, Please try again!';
                }
                dispatch({
                    type: ADD_POST_FAILED,
                    payload: err
                })
            });
    }
}

export const retrieveUserPosts = () =>{
    return async function (dispatch){
        dispatch({
            type: RETRIEVE_POSTS_REQUEST
        });
        await retrieveUserPostsApi()
            .then(response =>{
                dispatch({
                    type: RETRIEVE_POSTS_SUCCESS,
                    payload: response.data.posts
                })
            })
            .catch(error =>{
                console.error('error =>' + error);
                dispatch({
                    type: RETRIEVE_POSTS_FAILED,
                    payload: error.response.data.error
                })
            });
    }
}

export const retrievePost = (slug) =>{
    return async function (dispatch){
        dispatch({
            type: RETRIEVE_POST_REQUEST
        });
        await retrievePostApi(slug)
            .then(response =>{
                dispatch({
                    type: RETRIEVE_POST_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error =>{
                console.error('error =>' + error);
                dispatch({
                    type: RETRIEVE_POST_FAILED,
                    payload: error.response.data.error
                })
            });
    }
}