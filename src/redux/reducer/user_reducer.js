import {RESET_CREATED_FLAG, RESET_ERROR, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS} from "../action/types";

const INITIAL_STATE = {
    attempting: false,
    created: false,
    message: '',
    error: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                attempting: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                attempting: false,
                created: true,
                message: action.payload,
                error: ''
            }
        case SIGNUP_FAILED:
            return {
                ...state,
                attempting: false,
                created: false,
                message: '',
                error: action.payload
            }
        case RESET_CREATED_FLAG:
            return {
                ...state,
                created: false
            }
        case RESET_ERROR:
            return {
                INITIAL_STATE
            }
        default:
            return state;
    }
}

export default userReducer;