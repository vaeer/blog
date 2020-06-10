/**
 * @file 标签
 * @author vaer
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.css';

const Label = React.memo(props => {
    const { title, num, style, to } = props;
    
    const toDetail = () => {
        props.history.push(to)
    }
    return (
        <div
            className="article-label"
            style={{...style}}
            onClick={toDetail}
        >
            <span>{title}</span>
        </div>
    );
});

Label.propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    style: PropTypes.object,
    to: PropTypes.string.isRequired
};

export default withRouter(Label);