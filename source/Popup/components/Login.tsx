import * as React from 'react';
import "./scss/Login.scss"
const Login = () => {
  return (
    <div className="Login">
      <div id='container'>

        <h2>login</h2>
        <div>
          <div className='Input'>
            <input type='text' name='username' placeholder="username" />
          </div>
          <div className='Input'>
            <input type='password' name='password' placeholder="password" />
          </div>
          <button className='loginButton' >login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
