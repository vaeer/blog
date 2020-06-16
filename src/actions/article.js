/**
 * @file 文章操作
 * @author vaer
 */

// 获取文章
export const getArticles = payload => ({
    type: 'GET_ARTICLES_REQUEST',
    payload
});

// 搜索文章
export const searchArticles = payload => ({
    type: 'SEARCH_ARTICLES_REQUEST',
    payload
});

export const setArticles = payload => ({
    type: 'SET_ARTICLES',
    payload
});

export const setSearchResult = payload => ({
    type: 'SET_SEARCH_RESULT',
    payload
});