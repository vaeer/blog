/**
 * @file 文章页异步请求
 * @author vaer
 */

import { take, call, put, fork} from 'redux-saga/effects';

import { getArticles, getArticleDetail, getArticlesByLabel } from '../api/article';
import * as actions from '../actions/article';

function* get() {
    while (true) {
        try {
            const { payload } = yield take('GET_ARTICLES_REQUEST');
            const res = yield call(getArticles, payload);
            if (res.status === 0) {
                yield put(actions.setArticles(res.data));
            } else {
                alert(res.message);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

function* getByLabel() {
    while (true) {
        try {
            const { payload } = yield take('GET_ARTICLES_BY_LABEL_REQUEST');
            const res = yield call(getArticlesByLabel, payload);
            if (res.status === 0) {
                yield put(actions.setArticlesByLabel(res.data));
            } else {
                alert(res.message);
            }
        } catch (e) {
            console.log(e);
        }
    }

}

function* detail() {
    while (true) {
        try {
            const { payload } = yield take('GET_ARTICLE_DETAIL_REQUEST');
            const res = yield call(getArticleDetail, payload);
            if (res.status === 0) {
                yield put(actions.setArticleDetail(res.data));
            } else {
                alert(res.message);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default function* () {
    yield fork(get);
    yield fork(getByLabel);
    yield fork(detail);
};