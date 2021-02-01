import {
    ADD_POST_FAILED,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    RESET_CREATED_FLAG, RETRIEVE_POST_FAILED, RETRIEVE_POST_REQUEST, RETRIEVE_POST_SUCCESS, RETRIEVE_POSTS_FAILED,
    RETRIEVE_POSTS_REQUEST, RETRIEVE_POSTS_SUCCESS
} from "../action/types";

const INITIAL_STATE = {
    attempting: false,
    created: false,
    post: null,
    posts: [],
    fetchingPosts: false,
    message: '',
    error: ''
}

const postReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                attempting: true
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                attempting: false,
                created: true,
                post: action.payload
            }
        case ADD_POST_FAILED:
            return {
                ...state,
                attempting: false,
                created: false,
                error: action.payload
            }
        case RETRIEVE_POSTS_REQUEST:
            return {
                ...state,
                fetchingPosts: true
            }
        case RETRIEVE_POSTS_SUCCESS:
            return {
                ...state,
                fetchingPosts: false,
                posts: action.payload
            }
        case RETRIEVE_POSTS_FAILED:
            return {
                ...state,
                fetchingPosts: false,
                error: action.payload
            }
        case RETRIEVE_POST_REQUEST:
            return {
                ...state,
                attempting: true
            }
        case RETRIEVE_POST_SUCCESS:
            return {
                ...state,
                attempting: false,
                post: action.payload
            }
        case RETRIEVE_POST_FAILED:
            return {
                ...state,
                attempting: false,
                error: action.payload
            }
        case RESET_CREATED_FLAG:
            return {
                ...state,
                attempting: false,
                created: false
            }
        default:
            return state;
    }
}

export default postReducer;