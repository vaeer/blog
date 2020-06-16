/**
 * @file redux异步管理
 * @author vaer
 */

import { fork } from 'redux-saga/effects';
import article from './article';
import label from './label';

export default function* root() {
    yield fork(article);
    yield fork(label);
};