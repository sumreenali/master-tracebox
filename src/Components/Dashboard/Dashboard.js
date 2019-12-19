import React , { Component }from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';
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
        let backDrop;
        let mainStyle = 'main';
        if(this.state.sideDrawerOpen){
            backDrop = <BackDrop click= {this.backDropClickHandler}/>
            mainStyle = 'main slide';
           
        }
        return(
           <div>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                { backDrop }
                <main className={mainStyle}>
                <Toolbar drawerClickHandler= {this.drawerToggleClickHandler}/>
                    <p>Dashboard </p>
                </main>
           </div>
        )
    }
} 
export default Dashboard