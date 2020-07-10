/**
 * @file utils函数
 * @author vaer
 */


export const firstWordUpper = word => {
    try {
        if (typeof word === 'string') {
            return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return new TypeError('arugment must be string!');
        }
    } catch (e) {
        return e;
    }
};