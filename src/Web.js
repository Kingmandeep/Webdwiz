import React from 'react'
import Footer from './footer/Footer'
import Main1 from './main1/Main1'
import Navbar from './Nav/Navbar'
import Service1 from './service1/Service1'
import Web_dev from './web_dev/Web_dev'

 const Web = () => {
    return (
        <>
            <Navbar/>
            <Main1/>
            <Web_dev/>
            <Service1/>
            <Footer/>
        </>
    )
}
export default Web;
