import React from 'react'
import Brand_managment from './brand/Brand_managment'
import Footer from './footer/Footer'
import Main1 from './main1/Main1'
import Navbar from './Nav/Navbar'
import Service1 from './service1/Service1'

 const Brand = () => {
    return (
        <>
            <Navbar/>
            <Main1/>
            <Brand_managment/>
            <Service1/>
            <Footer/>
        </>
    )
}
export default Brand;
