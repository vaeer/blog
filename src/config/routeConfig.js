/**
 * @file 路由配置
 * @author vaer
 */

import About from '../routes/About';
import Blog from '../routes/Blog';
import Detail from '../routes/Detail/index';
import News from '../routes/News';
import Tag from '../routes/Tag';

export default [
    {
        path: '/',
        component: Blog,
        exact: true,
        name: '文章'
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
        path: '/article/:uid',
        component: Detail
    }, {
        path: '/tag/:label',
        exact: true,
        component: Tag
    }
];