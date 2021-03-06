/**
 * @file 标签
 * @author vaer
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { firstWordUpper } from '../../utils/utils';
import './index.css';

const Label = React.memo(props => {
    const { title, style, to, size, number, className } = props;

    const sizeStyle = {
        large: {
            height: '28px',
            lineHeight: '28px',
            fontSize: '16px'
        },
        middle: {
            height: '26px',
            lineHeight: '26px',
            fontSize: '14px'
        },
        small: {
            height: '24px',
            lineHeight: '24px',
            fontSize: '12px'
        }
    }
    
    const toDetail = e => {
        e.stopPropagation();
        props.history.push(`/tag/${to}`);
    };

    return (
        <div
            className={`article-label ${className}`}
            style={{...style, ...(sizeStyle[size])}}
            onClick={toDetail}
        >
            <span>{firstWordUpper(title)} {number}</span>
        </div>
    );
});

Label.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    to: PropTypes.string.isRequired,
    number: PropTypes.number,
    size: PropTypes.oneOf(['large', 'middle', 'small']),
    className: PropTypes.string
};

Label.defaultProps = {
    size: 'middle',
    title: ''
}

export default withRouter(Label);