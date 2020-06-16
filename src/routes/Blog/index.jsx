/**
 * @file 博客页
 * @author vaer
 */

import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { } from 'react-router-dom';
import ArticleItem from '../../components/ArticleItem';
import fire from '../../assets/fire.svg';
import Label from '../../components/Label';
import * as actions from '../../actions/article';
import './index.css';

const mapStateToProps = state => ({
    ...state.article
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch)
});

const Blog = React.memo(props => {
    const { getArticles, articleList, pageNo, pageSize, total} = props;

    useEffect(() => {
        getArticles();
    }, []);

    const blogContent = articleList
        .map(article => (
            <ArticleItem
                title={article.title}
                date={article.date}
                content={article.content}
                labels={article.label}
                to={`/${article.title}`}
            />
        ));
    
    const siderLabel = (
        <Fragment>
            <h3>
                Topics<img src={fire} alt="fire"/>
            </h3>
            <div className="sider-label-show">
                <Label title="javascript" num={1} to="/aaa" className="sider-label-item"/>
                <Label title="react" num={2} className="sider-label-item"/>
            </div>
        </Fragment>
    );

    const siderContact = '';

    return (
        <div className="blog">
            <div className="blog-content">
                {blogContent}
            </div>
            <div className="blog-sider">
                <div className="sider-label">
                    {siderLabel}
                </div>
                <div className="sider-contact">
                    {siderContact}
                </div>
            </div>
        </div>
    );
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);