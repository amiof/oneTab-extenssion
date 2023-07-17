import React from "react";
import "./scss/Register.scss";

type RegisterProps = {
  GotoRegister: boolean;
  setGotoRegister: React.Dispatch<React.SetStateAction<boolean>>;
};
const Register = ({ setGotoRegister, GotoRegister }: RegisterProps) => {
  return (
    <>
      {GotoRegister ? (
        <div className="Register">
          <div id="container">
            <h2>Register</h2>
            <div id="Div">
              <div className="Input">
                <input type="text" name="username" placeholder="username" />
              </div>

              <div className="Input">
                <input type="text" name="email" placeholder="email" />
              </div>

              <div className="Input">
                <input type="text" name="first_name" placeholder="first_name" />
              </div>
              <div className="Input">
                <input type="text" name="last_name" placeholder="last_name" />
              </div>
              <div className="Input">
                <input type="password" name="password" placeholder="password" />
              </div>
              <div className="Input">
                <input type="text" name="age" placeholder="age" />
              </div >
            </div>
            <div className="buttons">
            <button className="RegisterButton">register</button>

            <button className="loginButton" onClick={() => setGotoRegister(!GotoRegister)}>login</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Register;
