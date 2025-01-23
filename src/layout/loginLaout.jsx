import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/footer'
import NavigationBarTwo from '../components/navigationBarTwo'


const LoginLayout = () => {
    return (
        <>
            <NavigationBarTwo />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default LoginLayout