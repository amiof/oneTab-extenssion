import { Button } from "@mui/material";
import * as React from "react";
import { browser, Tabs } from "webextension-polyfill-ts";

import "../styles.scss";
import { Tuser } from "./AllUrls";

export function openWebPage(url: string): Promise<Tabs.Tab> {
  return browser.tabs.create({ url });
}

interface Props {
  setClick: React.Dispatch<React.SetStateAction<string>>;
  userData: Tuser | undefined;
}

const SideBar = ({ setClick, userData }: Props) => {
  return (
    <section id="sideBarContent">
      {!userData?.id ? (
        <Button
          variant="outlined"
          color="success"
          size="small"
          sx={{ marginY: "15px", Width: "80%" }}
          className="options__button"
          type="button"
          onClick={() => {
            setClick("login");
          }}
        >
          signIn/Up
        </Button>
      ) : (
        <Button
          className="options__button"
          variant="outlined"
          color="success"
          size="small"
          sx={{ marginY: "15px", Width: "80%" }}
          type="button"
          onClick={() => {
            setClick("logOut");
          }}
        >
          logOut
        </Button>
      )}
      <Button
        className="options__button"
        variant="outlined"
        color="success"
        size="small"
        sx={{ marginY: "15px" }}
        type="button"
        onClick={() => {
          setClick("urls");
        }}
      >
        Urls
      </Button>

      <Button
        className="options__button"
        variant="outlined"
        color="success"
        size="small"
        sx={{ marginY: "15px", Width: "80%" }}
        type="button"
        onClick={() => {
          setClick("openUrls");
        }}
      >
        oepnUrls
      </Button>

      <Button
        className="options__button"
        variant="outlined"
        color="success"
        size="small"
        sx={{ marginY: "15px", minWidth: "80%" }}
        type="button"
        onClick={() => {
          setClick("addTag");
        }}
      >
        addTag
      </Button>

      <Button
        className="options__button"
        variant="outlined"
        color="success"
        size="small"
        sx={{ marginY: "15px", minWidth: "80%" }}
        type="button"
        onClick={() => {
          setClick("favUrls");
        }}
      >
        favUrls
      </Button>

      <Button
        className="options__button"
        variant="outlined"
        color="success"
        size="small"
        sx={{ marginY: "15px", minWidth: "80%" }}
        type="button"
        onClick={() => {
          setClick("searchUrl");
        }}
      >
        search
      </Button>
      <Button
        className="options__button"
        variant="outlined"
        color="success"
        size="small"
        sx={{ marginY: "15px", minWidth: "80%" }}
        type="button"
        onClick={(): Promise<Tabs.Tab> => {
          return openWebPage("options.html");
        }}
      >
        setting
      </Button>
    </section>
  );
};

export default SideBar;
