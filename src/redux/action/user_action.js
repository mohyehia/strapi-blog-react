import {SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS} from "./types";
import {userRegistrationApi} from "../../api/user.api";

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
                    payload: error.response.data.message[0].messages[0].message
                })
            });
    }
}