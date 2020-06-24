import React from 'react';
import './index.css'

const Footer = React.memo(props => {
    return (
        <div className="blog-footer">
            Power By <a href="https://github.com/vaeer/reair">Reair</a>@vaeer
        </div>
    );
});

export default Footer;