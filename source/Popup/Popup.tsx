import * as React from "react";
import Login from "./components/Login";
import AllUrls, { Tuser } from "./components/AllUrls";
import SideBar from "./components/Sidebar";
import "./styles.scss";
import OpenUrls from "./components/OpenUrls";
import AddTag from "./components/AddTag";
import FavUrls from "./components/FavUrls";
import SearchUrl from "./components/Searchurl";
import LogOut from "./components/LogOut";
import { browser } from "webextension-polyfill-ts";
const Popup: React.FC = () => {
  const [userData, setUserData] = React.useState<Tuser>();
  const [Click, setClick] = React.useState<string>("notClicked");
  const [login, setLogin] = React.useState<boolean>(false);


  React.useEffect(() => {
    const storage = browser.storage.local.get("userData");
    storage.then((data) => setUserData(data.userData));
  }, []);
  console.log(Click);
  const urlProps = {
    setClick,
    userData,
  };
  const loginProp = { login, setLogin };

  return (
    <div className="container">
        <div className="title">
          <h2>ONE-Tab</h2>
          <div className="divider" />
        </div>
        <div className="popUp">
          <SideBar {...urlProps} />
        </div>
        <div className="content">
          {Click == "login" && !userData?.id ? <Login {...loginProp} /> :null}
          {Click == "logOut" && userData?.id ? <LogOut /> : null}
          {Click == "urls" || Click == "notClicked" ? <AllUrls /> : null}
          {Click == "openUrls" ? <OpenUrls /> : null}
          {Click == "addTag" ? <AddTag /> : null}
          {Click == "favUrls" ? <FavUrls /> : null}
          {Click == "searchUrl" ? <SearchUrl /> : null}
        </div>
    </div>
  );
};
export default Popup;
