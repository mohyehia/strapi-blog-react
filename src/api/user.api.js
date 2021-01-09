import axios from 'axios';

export const userRegistrationApi = (values) => {
    return axios.post('auth/local/register', values);
}