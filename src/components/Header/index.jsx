import React from 'react';
import routeConfig from '../../config/routeConfig';
import './index.css'

export default React.memo(props => {
    return (
        <div className="header-fixed">
            <a href="/" className="logo-btn">
                Vaer's Blog
            </a>
            <div className="route-btn-area">
                {routeConfig.map(item => (
                    <a href={item.path} key={item.path}>{item.name}</a>
                ))}
            </div>
        </div>
    );
});