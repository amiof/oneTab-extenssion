import * as React from 'react';
import './scss/Login.scss';
import {Tuser}from "./AllUrls"
const Login = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [userData,setUserData]=React.useState<Tuser|undefined>()

  function sendDataLogin() {
    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error.message));
  }
  console.log(userName, password);
  console.log("userData",userData)
  return (
    <div className="Login">
      <div id="container">
        <h2>login</h2>
        <div>
          <div className="Input">
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value);
              }}
              name="username"
              placeholder="username"
            />
          </div>
          <div className="Input">
            <input
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
              name="password"
              placeholder="password"
            />
          </div>
          <button className="loginButton" onClick={sendDataLogin}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
