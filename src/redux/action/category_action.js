import {RETRIEVE_CATEGORIES_FAILED, RETRIEVE_CATEGORIES_REQUEST, RETRIEVE_CATEGORIES_SUCCESS} from "./types";
import {retrieveCategoriesApi} from "../../api/category.api";

export const retrieveCategories = () =>{
    return async function(dispatch) {
        dispatch({
            type: RETRIEVE_CATEGORIES_REQUEST
        });
        await retrieveCategoriesApi()
            .then(response =>{
                dispatch({
                    type: RETRIEVE_CATEGORIES_SUCCESS,
                    payload: response.data.categories
                })
            })
            .catch(err =>{
                console.log(err);
                dispatch({
                    type: RETRIEVE_CATEGORIES_FAILED,
                    payload: err.data.error
                })
            });
    }
}