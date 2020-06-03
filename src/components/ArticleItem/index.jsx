/**
 * @file 文章item
 * @author vaer
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css'
import clockLight from '../../assets/clock-light.svg';
import clockDark from '../../assets/clock-dark.svg';

const mapStateToProps = state => ({
    ...state.common
});

const ArticleItem = React.memo(props => {
    
    const {title, date, content, mode} = props;
    return (
        <div className="article-item">
            <div className="article-title">
                {title}
            </div>
            <div className="article-desc">
                <img 
                    className="article-desc-icon"
                    src={mode ? clockLight : clockDark}
                />
                {date}
            </div>
            <div className="article-content">
                {content}
            </div>
            <div className="article-footer">
                查看更多
            </div>
        </div>
    );
});

ArticleItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(ArticleItem);