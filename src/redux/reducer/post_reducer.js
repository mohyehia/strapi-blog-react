import {ADD_POST_FAILED, ADD_POST_REQUEST, ADD_POST_SUCCESS, RESET_CREATED_FLAG} from "../action/types";

const INITIAL_STATE = {
    attempting: false,
    created: false,
    post: null,
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