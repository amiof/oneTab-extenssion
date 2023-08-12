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
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";
const Popup: React.FC = () => {
  const [userData, setUserData] = React.useState<Tuser>();
  const [Click, setClick] = React.useState<string>("notClicked");
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  React.useEffect(() => {
    const storage = browser.storage.local.get("userData");
    storage.then((data) => setUserData(data.userData));
  }, []);
  console.log(Click);
  const urlProps = {
    setClick,
    userData,
    openDrawer,
    setOpenDrawer
  };
  const loginProp = { setClick };

  return (
    <div className="container">
      <div id="title">
        <AppBar sx={{background:"#171616"}} position="static" enableColorOnDark={true} >
        <Toolbar variant="regular">
        <Button variant="outlined" size="small" onClick={()=>setOpenDrawer(!openDrawer)}>option</Button>
            <Typography variant="h6" sx={{margin:"auto"}}>Infinity-Tab</Typography>
        </Toolbar>
        </AppBar>
      </div>
      <div className="divider" />
      <div className="popUp">
        <SideBar {...urlProps} />
      </div>
      <div className="content">
        {Click == "login" ? <Login {...loginProp} /> : null}
        {Click == "logOut" ? <LogOut /> : null}
        {Click == "urls"  ? <AllUrls /> : null}
        {Click == "openUrls" || Click == "notClicked"? <OpenUrls /> : null}
        {Click == "addTag" ? <AddTag /> : null}
        {Click == "favUrls" ? <FavUrls /> : null}
        {Click == "searchUrl" ? <SearchUrl /> : null}
      </div>
      <Toaster />
    </div>
  );
};
export default Popup;
