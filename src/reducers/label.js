/**
 * @file 标签部分
 * @author vaer
 */

const initialState = {
    labels: []
};

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'SET_LABELS':
            return {
                ...state,
                labels: payload
            }
        default:
            return state;
    }
};