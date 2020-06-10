/**
 * @file 博客页
 * @author vaer
 */

import React from 'react';
import { connect } from 'react-redux';
import { } from 'react-router-dom';
import ArticleItem from '../../components/ArticleItem';
import Sider from '../../components/Sider';
import './index.css';

const Blog = React.memo(props => {

	const toArticleDetail = () => {
        
	}

    return (
        <div className="blog">
            <div className="blog-content">
                <ArticleItem
                    title="标题"
                    date="2020-06-03"
                    content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    to='/aaaa'
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
                <Sider/>
            </div>
        </div>
    );
});

export default connect()(Blog);