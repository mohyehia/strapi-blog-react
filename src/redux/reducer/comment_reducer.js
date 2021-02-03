import {ADD_COMMENT_FAILED, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, RESET_CREATED_FLAG} from "../action/types";

const INITIAL_STATE = {
    attempting: false,
    created: false,
    message: '',
    error: ''
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                attempting: true
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                attempting: false,
                created: true,
                message: action.payload
            }
        case ADD_COMMENT_FAILED:
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

export default commentReducer;