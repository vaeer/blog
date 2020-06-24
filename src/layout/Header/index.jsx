/**
 * @file 通用头部
 * @author vaer
 */

import React, { useEffect, useState, useRef } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import routeConfig from '../../config/routeConfig';
import * as common_Actions from '../../actions/common';
import * as article_Actions from '../../actions/article';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import searchLight from '../../assets/search-light.svg';
import searchDark from '../../assets/search-dark.svg';
import avator from '../../assets/avator.png';
import './index.css';

const mapStateToProps = state => ({
    ...state.common
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ ...common_Actions, ...article_Actions }, dispatch)
});

const Header = React.memo(props => {
    const { mode, process, changeProcess, changeTheme, getArticles } = props;
    const [inputVisible, setInputVisible] = useState(false);
    const [keywords, setKeywords] = useState('');
    const inputEl = useRef();
    
    useEffect(() => {
        const scrollEvent = () => {
            // 页面总高度
            const pageHeight = document.body.scrollHeight;
            // 页面滚动隐藏部分高度
            const scrollHeight =  window.scrollY;
            const scrollPercent = (scrollHeight / (pageHeight - window.innerHeight)).toFixed(2);
            changeProcess(scrollPercent * 100);
        };
        window.addEventListener('scroll', scrollEvent);
    
        return () => {
            window.removeEventListener('scroll', scrollEvent);
        }
    }, [window.scrollY]);

    useEffect(() => {
        inputEl.current.focus();
    }, [inputVisible]);

    useEffect(() => {
        getArticles({
            keywords
        });
    }, [keywords]);

    const input = e => {
        setKeywords(e.target.value);
    };

    return (
        <div className="header-fixed">
            <div className="header-process" style={{ width: `${process}%` }}/>
            <div className="header-container">
                <a href="/" className="logo-btn">
                    <img src={avator} className="logo-avator" alt="avator"/>
                    Vaer
                </a>
                <div className="route-btn-area">
                    <input
                        className={inputVisible ? 'header-search' : 'header-search-hidden'}
                        placeholder="搜索"
                        ref={inputEl}
                        onChange={input}
                    />
                    <img
                        src={mode ? searchLight : searchDark}
                        className="search-icon"
                        onClick={() => { setInputVisible(!inputVisible); }}
                        alt="search"
                    />
                    {
                        routeConfig.map(item => (
                            item.name && <a href={item.path} key={item.path}>{item.name}</a>
                            )
                        )
                    }
                </div>
                <img
                    src={mode ? moon : sun}
                    className="theme-toggle"
                    alt="mode"
                    onClick={() => { changeTheme(!mode) }}
                />
            </div>
        </div>
    );
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);