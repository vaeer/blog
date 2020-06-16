/**
 * @file 文章页异步请求
 * @author vaer
 */

import { take, call, put, fork, select} from 'redux-saga/effects';

import request from '../utils/ajax';
import { getArticles, searchArticles } from '../api/article';
import * as actions from '../actions/article';

function* get() {
    while (true) {
        try {
            const { payload } = yield take('GET_ARTICLES_REQUEST');
            const res = yield call(getArticles, payload);
            yield put(actions.setArticles(res));
        } catch (e) {
            console.log(e);
        }
    }
}

export default function* () {
    yield fork(get);
};