import React,{Fragment,useState} from 'react';
const Register = ()=>{
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name,email,password,password2} = formData 
    const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value})
return(
    <Fragment>
        <section class="container">
    <h1 class="large text-primary">
      Sign Up
    </h1>
    <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
    <form action="dashboard.html" class="form">
      <div class="form-group">
        <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)} required />
      </div>
      <div class="form-group">
        <input type="email" placeholder="Email Address" />
        <small class="form-text">
          This site uses Gravatar, so if you want a profile image, use a
          Gravatar email
        </small>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" minlength="6" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Confirm Password" minlength="6" />
      </div>
      <input type="submit" value="Register" class="btn btn-primary" />
    </form>
    <p class="my-1">
      Already have an account? <a href="login.html">Sign In</a>
    </p>
  </section>
    </Fragment>
)
    }

    export default  Register