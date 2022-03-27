import React from "react";
import { Layout, Tabs } from "antd";
import { Navigate } from "react-router-dom";
import Logo from '../../../assets/img/png/logo.png';

import './SignIn.scss';

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;

    return (
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                    <img src={Logo} alt="Jorge Lynch" />
                    <div className="sign-in__content-tabs">
                        <Tabs type="card">
                            <TabPane tab={<span>Entrar</span>} key="1">
                                Componente LoginForm
                            </TabPane>
                            <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                                Componente REgistro form
                            </TabPane>
                        </Tabs>
                    </div>
                </h1>
            </Content>
        </Layout>
    )
}