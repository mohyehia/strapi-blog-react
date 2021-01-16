import axios from 'axios';

export const userRegistrationApi = (values) => {
    return axios.post('auth/local/register', values);
}

export const userLoginApi = (values) =>{

    return axios.post('auth/local', {
        identifier: values.email,
        password: values.password
    });
}

export const updateUserProfileApi = (values) =>{
    return axios.put(`users/${values.id}`, values);
}