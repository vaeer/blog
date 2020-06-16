import { combineReducers } from "redux";
import common from './common';
import article from './article';
import label from './label';

export default combineReducers({
    common,
    article,
    label
});