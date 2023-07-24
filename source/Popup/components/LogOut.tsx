import React, { useEffect, useState } from "react";
import { browser } from "webextension-polyfill-ts";
import { Tuser } from "./AllUrls";

const LogOut = () => {
  // let user: Tuser = {
  //   id: "",
  //   first_name: "",
  //   age: 0,
  //   email: "",
  //   JwtToken: "",
  //   password: "",
  //   userName: "",
  //   last_name: "",
  // };
  //
  const [userData, setUserData] = useState<Tuser>();
  useEffect(()=>{
    const storage = browser.storage.local.get("userData");
    storage.then((data) =>setUserData(data.userData) );
  },[])
  const clickHandler=()=>{

    browser.storage.local.remove("userData");

  }
  console.log("logout", userData);

  return <div>`hi `{userData?.first_name}

<button onClick={clickHandler} >logeout</button>
  </div>;

};

export default LogOut;
