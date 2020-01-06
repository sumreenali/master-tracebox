import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router , Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store'
// import ManufactuerCreate from './Components/Manufacturer/ManufacturerCreate'
// import ManufacturerList from './Components/Manufacturer/ManufacturerDetails'
// import ManufacturerEdit from './Components/Manufacturer/ManufacturerEdit'
import Dashboard  from './Components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <Router>
          <Dashboard/>
          {/* <Route path="/manufacturer" exact component={ManufacturerList}/>
          <Route path="/manufacturer-edit/:id" component={ManufacturerEdit}/>
          <Router path="/manufacturer-create" component={ManufactuerCreate}/> */}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
