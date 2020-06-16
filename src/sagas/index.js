/**
 * @file redux异步管理
 * @author vaer
 */

import { fork } from 'redux-saga/effects';
import article from './article';

export default function* root() {
    yield fork(article);
};