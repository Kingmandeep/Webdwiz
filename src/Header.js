import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header>
             <div className="hleft">
                 <img src="./favicon.ico" alt=""/>
                 <p>We're the Web Wizards !</p>
             </div>
             <div className="hright">
                <ul>
                <li> <NavLink activeClassName="active_class"  to='/' className="main_nav">HOME</NavLink></li>
            <li> <NavLink activeClassName="active_class" to='/about' className="main_nav">ABOUT </NavLink></li>
            <li><NavLink activeClassName="active_class" to='/service' className="main_nav">SERVICES</NavLink></li>
                   
                </ul>
             </div>
                

            </header>
        </>
    )
}
export default Header;
