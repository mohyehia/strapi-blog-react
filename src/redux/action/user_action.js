import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_FAILED,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    UPDATE_PROFILE_FAILED,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    USER_LOGOUT
} from "./types";
import {updateUserProfileApi, userLoginApi, userRegistrationApi} from "../../api/user.api";
import SetAuthHeader from "../../api/auth_header";

const USER_KEY = "userInfo";
const TOKEN_KEY = "token";

export const signup = (values) => {
    return async function (dispatch) {
        dispatch({
            type: SIGNUP_REQUEST
        });
        await userRegistrationApi(values)
            .then(() => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: 'Your account created successfully, You can now login with your credentials!'
                })
            })
            .catch(error => {
                dispatch({
                    type: SIGNUP_FAILED,
                    payload: error.response.data.error
                })
            });
    }
}

export const login = (values) => {
    return async function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });
        await userLoginApi(values)
            .then(response => {
                const userProfile = JSON.stringify(response.data.user);
                console.log(response);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data.user
                });
                localStorage.setItem(USER_KEY, userProfile);
                localStorage.setItem(TOKEN_KEY, response.data.token);
            })
            .catch(error => {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: error.response.data.message
                })
            });
    }
}

export const updateUserProfile = (values) => {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_PROFILE_REQUEST
        });
        await updateUserProfileApi(values)
            .then(response => {
                console.log(response);
                const userProfile = JSON.stringify(response.data.user);
                dispatch({
                    type: UPDATE_PROFILE_SUCCESS,
                    payload: userProfile
                });
                localStorage.removeItem(USER_KEY);
                localStorage.setItem(USER_KEY, userProfile);
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: UPDATE_PROFILE_FAILED,
                    payload: err
                });
            });
    }
}


export const checkAuthentication = () => {
    return function (dispatch) {
        const user = localStorage.getItem(USER_KEY);
        const token = localStorage.getItem(TOKEN_KEY);
        if (user === null || user === undefined || token === null || token === undefined) {
            return dispatch({
                type: LOGIN_FAILED
            });
        }
        SetAuthHeader(token);
        return dispatch({
            type: LOGIN_SUCCESS,
            payload: JSON.parse(user)
        });
    }
}

export const logout = () => {
    localStorage.clear();
    return {
        type: USER_LOGOUT
    }
}