/**
 * @file 文章页
 * @author vaer
 */

const initialState = {
    articleList: [],
    articleListByLabel: [],
    pageNo: 1,
    pageSize: 10,
    total: 0,
    detail: {}
};

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'SET_ARTICLES':
            const { list, pageNo, pageSize, total } = payload;
            return {
                ...state,
                articleList: list,
                pageNo,
                pageSize,
                total
            };
        case 'SET_SEARCH_RESULT':
            return {
                ...state
            };
        case 'SET_ARTICLE_DETAIL':
            return {
                ...state,
                detail: payload
            };
        case 'SET_ARTICLES_BY_LABEL':
            return {
                ...state,
                articleListByLabel: payload
            };
        default:
            return state;
    }
};