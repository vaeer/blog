/**
 * @file 详情页
 * @author vaer
 */
import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import Label from '../../components/Label';

const mapStateToProps = state => ({
    ...state.common
});

const Detail = React.memo(props => {
    console.log(props);
    
    return (
        <div className="article-detail">
            <div className="article-header">
                <div className="article-title">
                    React原理剖析
                </div>
                <div className="article-info">
                    <span className="article-date">24th of May, 2020</span>
                    <span className="article-labels">
                        <Label title="javascript" size="small"/>
                    </span>
                </div>
            </div>
            <div className="article-content">
                正文
            </div>
        </div>
    );
});

export default connect(mapStateToProps)(Detail);