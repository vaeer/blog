/**
 * @file 文章操作
 * @author vaer
 */

// 获取文章
export const getArticles = payload => ({
    type: 'GET_ARTICLES_REQUEST',
    payload
});

// 获取文章详情
export const getArticleDetail = payload => ({
    type: 'GET_ARTICLE_DETAIL_REQUEST',
    payload
});

export const setArticles = payload => ({
    type: 'SET_ARTICLES',
    payload
});

export const setArticleDetail = payload => ({
    type: 'SET_ARTICLE_DETAIL',
    payload
});