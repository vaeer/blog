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
    }, []);

    return (
        <div className="article-detail">
            <div className="article-header">
                <div className="article-title">
                    {detail.title}
                </div>
                <div className="article-info">
                    <div className="article-date">{detail.date}</div>
                    <div className="article-labels">
                        {
                            Array.isArray(detail.labels)
                            && detail.labels.map(label => (
                                <Label
                                    to={label}
                                    title={label}
                                    size="small"
                                    className="article-label-item"
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="article-content" dangerouslySetInnerHTML={{ __html: detail.content}} />
        </div>
    );
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);