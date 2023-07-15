import React from 'react'
import "./scss/Register.scss"
const Register = () => {
  return (

    <div className="Register">
      <div id='container'>

        <h2>Register</h2>
        <div>
          <div className='Input'>
            <input type='text' name='username' placeholder="username" />
          </div>

          <div className='Input'>
            <input type='text' name='email' placeholder="email" />
          </div>

          <div className='Input'>
            <input type='text' name='first_name' placeholder="first_name" />
          </div>
          <div className='Input'>
            <input type='text' name='last_name' placeholder="last_name" />
          </div>
          <div className='Input'>
            <input type='password' name='password' placeholder="password" />
          </div>
          <div className='Input'>
            <input type='text' name='age' placeholder="age" />
          </div>
          <button className='RegisterButton' >register</button>
        </div>
      </div>
    </div>
  )
}

export default Register
