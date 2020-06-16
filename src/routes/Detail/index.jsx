/**
 * @file 详情页
 * @author vaer
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './index.css';
import Label from '../../components/Label';
import * as article_actions from '../../actions/article';

const mapStateToProps = state => ({
    ...state.article
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(article_actions, dispatch)
});

const Detail = React.memo(props => {
    const {
        getArticleDetail,
        detail = {}
    } = props;
    
    useEffect(() => {
        const uid = props.match.params.uid || '';
        getArticleDetail({ uid });
        console.log(detail);
    }, []);

    return (
        <div className="article-detail">
            <div className="article-header">
                <div className="article-title">
                    {detail.title}
                </div>
                <div className="article-info">
                    <span className="article-date">{detail.date}</span>
                    <span className="article-labels">
                        <Label title="javascript" size="small"/>
                    </span>
                </div>
            </div>
            <div className="article-content">
                {detail.content}
            </div>
        </div>
    );
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);