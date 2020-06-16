/**
 * @file 标签异步请求
 * @author vaer
 */

import { take, call, put, fork, select} from 'redux-saga/effects';

import request from '../utils/ajax';
import { getLabels } from '../api/label';
import * as actions from '../actions/label';

function* get() {
    while (true) {
        try {
            const { payload } = yield take('GET_LABELS_REQUEST');
            const res = yield call(getLabels, payload);
            if (res.status === 0) {
                yield put(actions.setLabels(res.data));
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
};