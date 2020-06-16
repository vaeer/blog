/**
 * @file label部分接口
 * @author jinghao
 */
import request from  '../utils/ajax';

export const getLabels = async params => {
    return await request('/label/get',{
        method: 'post',
        data: params
    });
};
