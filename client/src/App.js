import logo from './logo.svg';
import './App.css';
import React,{Fragment} from 'react';
import Landing from './components/layouts/Landing'
import Navbar from './components/layouts/Navbar'
function App() {
  return (
   <Fragment>
     <Navbar/>
     <Landing/>
   </Fragment>
  );
}

export default App;
