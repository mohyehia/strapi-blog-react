import axios from 'axios';

export const userRegistrationApi = (values) => {
    return axios.post('users/signup', values);
}

export const userLoginApi = (values) =>{
    return axios.post('users/login', values);
}

export const updateUserProfileApi = (values) =>{
    return axios.put('users/update', values);
}