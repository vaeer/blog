/**
 * @file 文章item
 * @author vaer
 */

import React from 'react';
import { connect } from 'redux';


const ArticleItem = React.memo(props => {
    const {tilte, date, content} = props;
    return (
        <div className="article-item">
            <div className="article-title">
                {title}
            </div>
            <div className="article-desc">
                {date}
            </div>
            <div className="article-content">
                {content}
            </div>
        </div>
    );
});

export default connect()(ArticleItem);