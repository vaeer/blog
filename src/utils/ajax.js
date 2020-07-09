/**
 * @file 通用请求
 * @author vaer
 */
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? '/mock' : '/';

const client = axios.create({
    baseURL
});

client.interceptors.request.use(config => {
    return config;
});

client.interceptors.response.use(config => {
    return config;
});

export default async (url,options) => {
    try {
        let result = await client({
            ...options,
            url
        });
        return result.data;
    } catch(err) {
        console.log('服务器开小差了~');
    }
}