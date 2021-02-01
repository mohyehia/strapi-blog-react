import axios from 'axios';

export const addPostApi = (values) =>{
    return axios.post('/posts', values);
}

export const retrieveUserPostsApi = () =>{
    return axios.get('/posts');
}

export const retrievePostApi = (slug) =>{
    return axios.get(`/posts/${slug}`);
}