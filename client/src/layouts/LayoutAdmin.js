import React, { useState } from 'react';
import { Layout } from 'antd';
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';
import AdminSignIn from '../pages/Admin/SignIn/SignIn';


import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './LayoutAdmin.scss';

export default function LayoutAdmin(props) {
    const { children } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const { Header, Content, Footer } = Layout;

    const user = null;
    const location = useLocation();

    if (!user) {
        return (
            <>

                <AdminSignIn /> /*esta funciona bien, pero, no realiza la redirección*/
                {/*<Route path='/admin/login' element={<AdminSignIn />} />*/} /*esta no funciona*/


                {/* <Navigate to={'/admin/login'} replace />*/} /*esta funciona pero genera el loop infinito.*/
            </>
        );
    }

    // console.log(props);
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className='layout-admin'
                style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
                <Header className='layout-admin__header'>
                    <MenuTop
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className='layout-admin__content'>
                    {children}
                </Content>
                <Footer className='layout-admin__footer'>
                    Footer: Jorge Lynch
                </Footer>
            </Layout>

        </Layout>
    );
}
