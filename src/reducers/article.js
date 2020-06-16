/**
 * @file 文章页
 * @author vaer
 */

const initialState = {
    articleList: [],
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
            console.log('.....', {
                ...state,
                detail: payload
            });
            return {
                ...state,
                detail: payload
            };
        default:
            return state;
    }
};