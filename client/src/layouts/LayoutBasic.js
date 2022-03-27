import React from 'react';
import { Layout } from 'antd';

export default function LayoutBasic(props) {
    const { children } = props;
    const { Content, Header, Footer } = Layout;

    return (
        <Layout>
            <h2>Menu Cliente</h2>
            <Layout>
                <Content>{children}</Content>
                <Footer>Footer: Jorge Lynch</Footer>
            </Layout>
        </Layout>
    );
}

