/**
 * @file 通用请求
 * @author vaer
 */
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? '/' : '/';

const client = axios.create({
    baseURL
});

export default async (url,options) => {
    try{
        let result = await client({
            ...options,
            url
        });
        return result.data;
    } catch(err) {
        console.log('服务器开小差了~');
    }
}