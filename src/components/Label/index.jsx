/**
 * @file 标签
 * @author vaer
 */
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Footer = React.memo(props => {
    const { title, num, style } = props;
    return (
        <div className="article-label" style={{...style}}>
            <span>{title}</span>
        </div>
    );
});

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    style: PropTypes.object
}

export default Footer;