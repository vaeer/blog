/**
 * @file article部分接口
 * @author jinghao
 */
import request from  '../utils/ajax';

export const getArticles = async params => {
    return await request('/article/get', {
        method: 'post',
        data: params
    });
};

export const getArticlesByLabel = async params => {
    return await request('/article/getByLabel', {
        method: 'post',
        data: params
    });
}

export const searchArticles = async params => {
    return await request('/article/search', {
        method: 'post',
        data: params
    });
};

export const getArticleDetail = async params => {
    return await request('/article/detail', {
        method: 'post',
        data: params
    });
};

export const saveArticles = async params => {
    return await request('/article/save', {
        method: 'post',
        data: params
    })
};

export const updateArticles = async params => {
    return await request('/article/update', {
        method: 'post',
        data: params
    })
};

export const deleteArticles = async params => {
    return await request('/article/delete', {
        method: 'post',
        data: params
    })
};