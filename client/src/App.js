import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store'
import Navbar from './Components/Toolbar/Toolbar';
import Dashboard  from './Components/Dashboard/Dashboard'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Profile from './Components/Auth/Profile';


function App() {
  return (
    <div>
      <Provider store ={store}>
        <Router>
          <Navbar/>
          <div className="mt-5"> 
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/dashboard' component={Dashboard}/>       
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
