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
        path: '/about',
        component: About,
        exact: true,
        name: '关于'
    }, {
        path: '/',
        component: Blog,
        exact: true,
        name: '主页'
    }, {
        path: '/:date',
        exact: true,
        component: Detail
    }, {
        path: '/news',
        component: News,
        exact: true,
        name: '新闻'
    }
];