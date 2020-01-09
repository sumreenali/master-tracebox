import React, {Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './toolbar.css'
import logo from '../../asset/img/logo1.png'


 class Toolbar extends Component {

     logOut= e =>{
         e.preventDefault()
         localStorage.removeItem('usertoken')
         this.props.history.push(`/`)
     }

     render(){
         const loginRegLink = (
            <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo">
                    <a href="/login" >
                    <img src={logo} width="160" height="135" alt="logo"/></a>
                </div>
                <div className="spacer"></div>
                <div>
                <ul>
                    <li className="toolbar_navigation-items">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                        </li>
                        <li className="toolbar_navigation-items">
                        <Link to="/register" className="nav-link">
                            Sign Up
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
          
         )

         const userLink = (
            <header className="toolbar">
            <nav className="toolbar_navigation">
                <div>
                    <DrawerToggleButton click={this.props.drawerClickHandler} />
                </div>
                <div className="toolbar_logo">
                    <a href="/login" >
                    <img src={logo} width="160" height="135" alt="logo"/></a>
                </div>
                <div className="spacer"></div>
                <div>
                <ul>
                    <li className="toolbar_navigation-items">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                    </li>
                    <li className="toolbar_navigation-items">
                    <a href="/logout" onClick={this.logOut} className="nav-link">
                        Logout
                    </a>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
           
         )

         return(<div>
             {localStorage.usertoken ? userLink : loginRegLink}
         </div>)

        // return(
        //     <header className="toolbar">
        //     <nav className="toolbar_navigation">
        //         <div>
        //             <DrawerToggleButton click={this.props.drawerClickHandler} />
        //         </div>
        //         <div className="toolbar_logo">
        //             <a href="/" >
        //             <img src={logo} width="160" height="135"/></a>
        //         </div>
        //         <div className="spacer"></div>
        //         <div>
        //             <ul>
        //                 <li className="toolbar_navigation-items">
        //                     <a href="/">Setting</a>
        //                 </li>
        //                 <li className="toolbar_navigation-items">
        //                     <a href="/">Logout</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </header>
        // )
     }
    
   
 }

 export default withRouter(Toolbar)