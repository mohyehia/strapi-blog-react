import axios from "axios";

export const addCommentApi = (values) =>{
    return axios.post(`/comments/${values.postSlug}`, values);
}