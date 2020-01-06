import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './toolbar.css'
import logo from '../../asset/img/logo1.png'


 const Toolbar = props => {
    
    return(
        <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
                <a href="/" >
                <img src={logo} width="160" height="135"/></a>
            </div>
            <div className="spacer"></div>
            <div>
                <ul>
                    <li className="toolbar_navigation-items"><a href="/">Setting</a></li>
                    <li className="toolbar_navigation-items"><a href="/">Logout</a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
 }

 export default Toolbar