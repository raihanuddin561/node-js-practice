import logo from './logo.svg';
import './App.css';
import React,{Fragment} from 'react';
import Landing from './components/layouts/Landing'
import Navbar from './components/layouts/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {BrowserRouter as Router,Route,Switch,Swithc} from 'react-router-dom'
function App() {
  return (
   <Router>
     <Fragment>
     <Navbar/>
     <Route exact path='/' component={Landing}/>
     <Switch>
       <div className="container">
       <Route exact path='/login' component={Login}/>
     <Route exact path='/register' component={Register}/>
       </div>
     </Switch>
   </Fragment>
   </Router>
  );
}

export default App;
