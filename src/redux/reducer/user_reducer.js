import {
    LOGIN_FAILED,
    LOGIN_REQUEST, LOGIN_SUCCESS,
    RESET_CREATED_FLAG,
    RESET_ERROR,
    SIGNUP_FAILED,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS, UPDATE_PROFILE_FAILED, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, USER_LOGOUT
} from "../action/types";

const INITIAL_STATE = {
    attempting: false,
    created: false,
    updated: false,
    profile: null,
    isLoggedIn: false,
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
                message: '',
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
        case LOGIN_REQUEST:
            return {
                ...state,
                attempting: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                attempting: false,
                isLoggedIn: true,
                profile: action.payload,
                message: '',
                error: ''
            }
        case LOGIN_FAILED:
            return {
                ...state,
                attempting: false,
                isLoggedIn: false,
                profile: null,
                message: '',
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                profile: null
            }
        case RESET_ERROR:
            return {
                ...state,
                attempting: false,
                error: ''
            }
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                attempting: true
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                attempting: false,
                updated: true,
                profile: action.payload
            }
        case UPDATE_PROFILE_FAILED:
            return {
                ...state,
                attempting: false,
                updated: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;