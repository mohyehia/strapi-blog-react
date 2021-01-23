import {ADD_POST_FAILED, ADD_POST_REQUEST, ADD_POST_SUCCESS} from "./types";
import {addPostApi} from "../../api/post.api";

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