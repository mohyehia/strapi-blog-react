import {ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILED} from "./types";
import {addCommentApi} from "../../api/comment.api";

export const addComment = (values) => {
    return async function (dispatch) {
        dispatch({
            type: ADD_COMMENT_REQUEST
        });
        await addCommentApi(values)
            .then(response => {
                console.log(response);
                dispatch({
                    type: ADD_COMMENT_SUCCESS,
                    payload: response.data.message
                })
            })
            .catch(error => {
                console.log('error =>' + error);
                dispatch({
                    type: ADD_POST_FAILED,
                    payload: error.data.message
                })
            });
    }
}