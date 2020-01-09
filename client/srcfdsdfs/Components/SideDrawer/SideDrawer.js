import React from 'react'
import "./SideDrawer.css"
const SideDrawer = props => {
    
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses= 'side-drawer open';
    }
    return(
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Products</a></li>
            <hr></hr>
            <li><a href="/">Manufacturer</a></li>
            <hr></hr>
            <li><a href="/">Orders</a></li>
            <hr></hr>
            <li><a href="/">Dealers</a></li>
            <hr></hr>
        </ul>
    </nav>);
};

export default SideDrawer;