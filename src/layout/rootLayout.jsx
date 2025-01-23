import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import NavigationBar from '../components/navigationBar'
import Footer from '../components/footer'


const RootLayout = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout