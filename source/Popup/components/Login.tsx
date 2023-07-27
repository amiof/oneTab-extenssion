import * as React from "react";
import "./scss/Login.scss";
import { Tuser } from "./AllUrls";
import Register from "./Register";
import { browser } from "webextension-polyfill-ts";
import { Button } from "@mui/material";
type propsLogin = {
  setClick: React.Dispatch<React.SetStateAction<string>>;
};
const Login = ({ setClick }: propsLogin) => {
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [userData, setUserData] = React.useState<Tuser | undefined>();
  const [GotoRegister, setGotoRegister] = React.useState<boolean>(false);
  const RegisterGo = {
    GotoRegister,
    setGotoRegister,
  };

  const logOut = () => setClick("logOut");
  function sendDataLogin() {
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error.message));
  }
  React.useEffect(() => {
    const storage = browser.storage.local.set({ userData });
    storage.then((data) => console.log(data));
    // storage.then(() => setLogin(!login));
    // storage.then(()=>setClick("logOut"))
    if (userData?.id) {
      logOut();
      console.log("i ami in if ");
    }
  }, [userData]);

  // console.log(userName, password);
  console.log("userData", userData);
  return (
    <>
      {!GotoRegister ? (
        <div className="Login">
          <div id="container">
            <h2>login</h2>
            <div id="Div">
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
              <div className="buttons">
                <Button className="loginButton" onClick={sendDataLogin}>
                  login
                </Button>
                <Button
                  className="RegisterButton"
                  onClick={() => setGotoRegister(!GotoRegister)}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Register {...RegisterGo} />
      )}
    </>
  );
};

export default Login;
