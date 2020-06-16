/**
 * @file 路由配置
 * @author vaer
 */

import About from '../routes/About';
import Blog from '../routes/Blog';
import Detail from '../routes/Detail/index';
import News from '../routes/News';

export default [
    {
        path: '/',
        component: Blog,
        exact: true,
        name: '主页'
    }, {
        path: '/news',
        component: News,
        exact: true,
        name: '新闻'
    }, {
        path: '/about',
        component: About,
        exact: true,
        name: '关于'
    }, {
        path: '/:uid',
        component: Detail
    }
];