/**
 * @file 博客页
 * @author vaer
 */

import React from 'react';
import { connect } from 'react-redux';
import { } from 'react-router-dom';
import ArticleItem from '../../components/ArticleItem';
import './index.css';
import fire from '../../assets/fire.svg';
import Label from '../../components/Label';

const Blog = React.memo(props => {

    return (
        <div className="blog">
            <div className="blog-content">
                <ArticleItem
                    title="标题"
                    date="2020-06-03"
                    content="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
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
                <div className="sider-label">
                    <h3>
                        Topics<img src={fire} alt="fire"/>
                    </h3>
                    <div className="sider-label-show">
                        <Label title="javascript" num={1} to="/aaa" className="sider-label-item"/>
                        <Label title="react" num={2} className="sider-label-item"/>
                    </div>
                </div>
                <div className="sider-contact">
                
                </div>
            </div>
        </div>
    );
});

export default connect()(Blog);