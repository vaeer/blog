/**
 * @file 标签页
 * @author vaer
 */

import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { firstWordUpper } from '../../utils/utils';
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
    const { getArticlesByLabel, getLabels, articleListByLabel, articleListByLabelTotal, labels } = props;
    // 查询的label关键字
    const LABEL = props.match.params.label || '';

    useEffect(() => {
        getLabels();
    }, []);

    useEffect(() => {
        getArticlesByLabel({label: LABEL});
    }, [LABEL]);

    const blogContent = articleListByLabel.length
        ? articleListByLabel.map(
            article => (
                <ArticleItem
                    title={article.title}
                    date={article.date}
                    content={article.content}
                    labels={article.labels}
                    to={`/article/${article.uid}`}
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
                        <Label
                            to={label.name}
                            title={label.name}
                            number={label.number}
                            key={label.name}
                            className="sider-label-item"
                        />
                    ))
                }
            </div>
        </Fragment>
    );

    const siderContact = '';
    return (
        <div className="tag">
            {
                LABEL
                && <div className="upper-content">
                    Articles About<strong>{firstWordUpper(LABEL)}</strong>
                    <div className="page">共{articleListByLabelTotal}篇</div>
                </div>
            }
            <div className="below-content">
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
        </div>
    );
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);