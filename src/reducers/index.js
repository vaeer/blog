import { combineReducers } from "redux";
import common from './common';
import article from './article';
export default combineReducers({
    common,
    article
});