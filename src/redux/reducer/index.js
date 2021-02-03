import {combineReducers} from "redux";
import userReducer from "./user_reducer";
import postReducer from "./post_reducer";
import categoryReducer from "./category_reducer";
import commentReducer from "./comment_reducer";

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    category: categoryReducer,
    comment: commentReducer
});

export default rootReducer;