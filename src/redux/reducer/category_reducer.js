import {RETRIEVE_CATEGORIES_REQUEST, RETRIEVE_CATEGORIES_SUCCESS, RETRIEVE_CATEGORIES_FAILED} from "../action/types";

const INITIAL_STATE = {
    attempting: false,
    categories: [],
    error: ''
}

const categoryReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case RETRIEVE_CATEGORIES_REQUEST:
            return {
                ...state,
                attempting: true
            }
        case RETRIEVE_CATEGORIES_SUCCESS:
            return {
                ...state,
                attempting: false,
                categories: action.payload,
                error: ''
            }
        case RETRIEVE_CATEGORIES_FAILED:
            return {
                ...state,
                attempting: false,
                categories: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer;