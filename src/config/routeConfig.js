/**
 * @file 路由配置
 * @author vaer
 */

import About from '../routes/About';
import Blog from '../routes/Blog'

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
    }
]