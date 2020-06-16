/**
 * @file 标签操作
 * @author vaer
 */

// 获取标签
export const getLabels = payload => ({
    type: 'GET_LABELS_REQUEST',
    payload
});

export const setLabels = payload => ({
    type: 'SET_LABELS',
    payload
});