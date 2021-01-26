import axios from 'axios';

export const retrieveCategoriesApi = () => {
    return axios.get('/categories');
}