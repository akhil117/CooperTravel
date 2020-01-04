import React from 'react';
import sql from 'mssql';
import {Route , Switch} from 'react-router-dom';
import './App.css';
import Portal from './Pages/Portal/portal.component'
function App() {
  return (
    <div>
      <Switch>
        <Route exact ={true} path ='/' component={Portal}/>
      </Switch>
    </div>
  );
}

export default App;
