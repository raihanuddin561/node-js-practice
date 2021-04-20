import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
   return(
    <nav class="navbar bg-dark">
    <h1>
      <a href="dashboard.html"> <i class="fas fa-code"></i> DevConnector </a>
    </h1>
    <ul>
      <Link to='/profile'>Register</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </ul>
    </nav>
   )
}

export default Navbar