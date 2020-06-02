/**
 * @file 通用头部
 * @author vaer
 */

import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import routeConfig from '../../config/routeConfig';
import * as actions from '../../actions/common';
import './index.css';

const mapStateToProps = state => ({
    ...state.common
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch)
})

const Header = React.memo(props => {
    const {mode, process} = props;
    useEffect(() => {
        props.changeProcess(10);
    }, []);
    return (
        <div className="header-fixed">
            <div className="header-process" style={{ width: `${process}%` }}/>
            <div className="header-container">
                <a href="/" className="logo-btn">
                    Vaer
                    <span></span>
                </a>
                <div className="route-btn-area">
                    {
                        routeConfig.map(item => (
                            <a href={item.path} key={item.path}>{item.name}</a>
                            )
                        )
                    }
                </div>
                <button onClick={() => { props.changeTheme(!mode) }}>切换</button>
            </div>
        </div>
    );
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);