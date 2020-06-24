/**
 * @file 博客页
 * @author vaer
 */

import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { } from 'react-router-dom';
import ArticleItem from '../../components/ArticleItem';
import Blank from '../../components/Blank';
import fire from '../../assets/fire.svg';
import Label from '../../components/Label';
import * as article_actions from '../../actions/article';
import * as label_actions from '../../actions/label';
import './index.css';

const mapStateToProps = state => ({
    ...state.article,
    ...state.label
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({...article_actions, ...label_actions}, dispatch)
});

const Blog = React.memo(props => {
    const { getArticles, getLabels, articleList, pageNo, pageSize, total, labels } = props;
    
    useEffect(() => {
        getArticles();
        getLabels();
    }, []);

    const blogContent = articleList.length
        ? articleList.map(
            article => (
                <ArticleItem
                    title={article.title}
                    date={article.date}
                    content={article.content}
                    labels={article.label}
                    to={`/${article.uid}`}
                    key={article.uid}
                />
            ))
        : <Blank />;
    
    const siderLabel = (
        <Fragment>
            <h3>
                Topics<img src={fire} alt="fire"/>
            </h3>
            <div className="sider-label-show">
                {
                    labels.map(label => (
                        <Label title={label} key={label} className="sider-label-item"/>
                    ))
                }
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