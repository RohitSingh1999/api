import { combineReducers } from "redux";
import blogReducer from "../reducers/blogReducer";
import webitorialReducer from "../reducers/webitorialReducer";
import galleryReducer from "../reducers/galleryReducer";

const rootred = combineReducers({
    blogReducer,
    webitorialReducer,
    galleryReducer,
});

export default rootred