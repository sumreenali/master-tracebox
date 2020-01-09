import React , { Component }from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';
import Product from '../Product/Product';
import './Dashboard.css';

class Dashboard extends Component{
    
    state = {
        sideDrawerOpen: false
    }
    drawerToggleClickHandler = () => { 
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
           
        });
    };

    backDropClickHandler = () => {
        this.setState({
            sideDrawerOpen:false
        });
    }

    
    render (){
        let mainStyle = 'main';
        if(this.state.sideDrawerOpen){
            mainStyle = 'main slide';        
        }
        return(
           <div>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                <Toolbar drawerClickHandler= {this.drawerToggleClickHandler}/>
                <div className="container">
                    <main className={mainStyle}>
                        <Product/>
                    </main>
                </div>
           </div>
        )
    }
} 
export default Dashboard