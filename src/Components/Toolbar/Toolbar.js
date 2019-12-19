import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './toolbar.css'

 const Toolbar = props => {
    
    return(
        <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
                <a href="/" >MAKEUP TRACEBOX</a>
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