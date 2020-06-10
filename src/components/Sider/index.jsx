import React from 'react';
import './index.css';
import fire from '../../assets/fire.svg';
import Label from '../../components/Label';

const Sider = React.memo(props => {
    return (
        <div className="sider">
            <div className="sider-label">
                <h3>
                    Topics<img src={fire}/>
                </h3>
                <div className="sider-label-show">
                    <Label title="javascript" num={1} to="/aaa"/>
                    <Label title="react" num={2}/>
                </div>
            </div>
            <div className="sider-contact">
        
            </div>
        </div>
    );
});

export default Sider;