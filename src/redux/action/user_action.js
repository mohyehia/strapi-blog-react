import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_FAILED,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    USER_LOGOUT
} from "./types";
import {userLoginApi, userRegistrationApi} from "../../api/user.api";
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
                let err;
                if (error.response && error.response.data) {
                    err = error.response.data.message[0].messages[0].message;
                } else {
                    err = 'Server error, Please try again!';
                }
                dispatch({
                    type: SIGNUP_FAILED,
                    payload: err
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
                localStorage.setItem(TOKEN_KEY, response.data.jwt);
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                let err;
                if (error.response && error.response.data && error.response.data.message[0]) {
                    err = error.response.data.message[0].messages[0].message;
                } else {
                    err = 'Server error, Please try again!';
                }
                dispatch({
                    type: LOGIN_FAILED,
                    payload: err
                })
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

export const logout = () =>{
    localStorage.clear();
    return {
        type: USER_LOGOUT
    }
}