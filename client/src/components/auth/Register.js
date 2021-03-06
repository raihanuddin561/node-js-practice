import React,{Fragment,useState} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth'
import PropTypes from 'prop-types'
const Register = ({setAlert,register})=>{
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name,email,password,password2} = formData 
    const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = e => {
      e.preventDefault()
      if(password!==password2){
        setAlert("password not matched","danger")
      }else{
        register({name,email,password})
      }
    }
return(
    <Fragment>
        <section className="container">
    <h1 className="large text-primary">
      Sign Up
    </h1>
    <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
    <form onSubmit={e=>onSubmit(e)} className="form">
      <div className="form-group">
        <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)} required />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onChange(e)} required />
  
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" name="password" minlength="6" value={password} onChange={e=>onChange(e)} required/>
      </div>
      <div className="form-group">
        <input type="password" placeholder="Confirm Password" minlength="6" name="password2" value={password2} onChange={e=>onChange(e)} required/>
      </div>
      <input type="submit" value="Register" className="btn btn-primary" />
    </form>
    <p className="my-1">
      Already have an account? <Link to="/login">Sign In</Link>
    </p>
  </section>
    </Fragment>
)
    }
Register.propTypes={
  setAlert:PropTypes.func.isRequired,
  register:PropTypes.func.isRequired,
}
    export default connect(null,{setAlert,register})(Register)