import axios from 'axios';

export const addPostApi = (values) =>{
    return axios.post('/posts', values);
}