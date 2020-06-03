/**
 * @file 博客页
 * @author vaer
 */

import React from 'react';
import { connect } from 'react-redux';
import ArticleItem from '../../components/ArticleItem';
import './index.css';

const Blog = React.memo(props => {
    return (
        <div className="blog">
            <div className="blog-content">
                <ArticleItem
                    title="标题"
                    date="2020-06-03"
                    content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                />
                <ArticleItem
                    title="标题"
                    date="2020-06-03"
                    content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                />
                <ArticleItem
                    title="标题"
                    date="2020-06-03"
                    content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                />
            </div>
            <div className="blog-sider">
                {/* 待添加 */}
            </div>
        </div>
    );
});

export default connect()(Blog);