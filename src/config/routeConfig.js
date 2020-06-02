/**
 * @file 路由配置
 * @author vaer
 */

import About from '../routes/About';
import Main from '../routes/Main'

export default [
    {
        path: '/about',
        component: About,
        exact: true,
        name: '关于'
    }, {
        path: '/',
        component: Main,
        exact: true,
        name: '主页'
    }
]