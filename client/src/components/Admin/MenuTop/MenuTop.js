import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/logo.png';

import './MenuTop.scss';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;
    return (
        <div className='menu-top'>
            <div className='menu-top__left'>
                <img className='menu-top__left-logo'
                    src={Logo}
                    alt="Jorge Lynch"
                />
                <span className='menu-top__left-logo__ini'> Capa</span>ces.Pe
                <Button type='Link' onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {React.createElement(menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
            </div>
            <div className='menu-top__right'>
                <Button type='Link' onClick={() => console.log('Saliendo')}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}