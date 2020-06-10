/**
 * @file 文章item
 * @author vaer
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.css'
import clockLight from '../../assets/clock-light.svg';
import clockDark from '../../assets/clock-dark.svg';
import Label from '../Label';

const mapStateToProps = state => ({
    ...state.common
});

const ArticleItem = React.memo(props => {
    const {title, date, content, mode, to, labels} = props;
    
    const toDetail = () => {
        props.history.push(to);
    }

    return (
        <div className="article-item" onClick={toDetail}>
            <div className="article-item-title">
                {title}
            </div>
            <div className="article-item-desc">
                <img
                    className="article-item-desc-icon"
                    src={mode ? clockLight : clockDark}
                    alt="clock"
                />
                {date}
                <div className="article-item-labels">
                    {
                        labels && labels.map(label => (
                            <Label
                                to={`/${title}`}
                                title={label.title}
                                size="small"
                                className="article-item-label"
                            />
                        ))
                    }
                </div>
            </div>
            <div className="article-item-content">
                {content}
            </div>
            <div className="article-item-footer">
                查看更多
            </div>
        </div>
    );
});

ArticleItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    labels: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(ArticleItem));