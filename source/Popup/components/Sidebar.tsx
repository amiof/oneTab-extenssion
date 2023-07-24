import * as React from "react";
import { browser, Tabs } from "webextension-polyfill-ts";

import "../styles.scss";
import { Tuser } from "./AllUrls";

function openWebPage(url: string): Promise<Tabs.Tab> {
  return browser.tabs.create({ url });
}

interface Props {
  setClick: React.Dispatch<React.SetStateAction<string>>;
  userData:Tuser | undefined
}

const SideBar = ({ setClick,userData }: Props) => {

  return (
    <section id="sideBarContent">
      {!userData?.id ? (
        <button
          className="options__button"
          type="button"
          onClick={() => {
            setClick("login");
          }}
        >
          signIn/Up
        </button>
      ) : (
        <button
          className="options__button"
          type="button"
          onClick={() => {
            setClick("logOut");
          }}
        >
          logOut
        </button>
      )}
      <button
        className="options__button"
        type="button"
        onClick={() => {
          setClick("urls");
        }}
      >
        Urls
      </button>

      <button
        className="options__button"
        type="button"
        onClick={() => {
          setClick("openUrls");
        }}
      >
        oepnUrls
      </button>

      <button
        className="options__button"
        type="button"
        onClick={() => {
          setClick("addTag");
        }}
      >
        addTag
      </button>

      <button
        className="options__button"
        type="button"
        onClick={() => {
          setClick("favUrls");
        }}
      >
        favUrls
      </button>

      <button
        className="options__button"
        type="button"
        onClick={() => {
          setClick("searchUrl");
        }}
      >
        searchUrl
      </button>
      <button
        className="options__button"
        type="button"
        onClick={(): Promise<Tabs.Tab> => {
          return openWebPage("options.html");
        }}
      >
        setting
      </button>
    </section>
  );
};

export default SideBar;
