import * as React from 'react';
import {browser, Tabs} from 'webextension-polyfill-ts';

import '../styles.scss';

function openWebPage(url: string): Promise<Tabs.Tab> {
  return browser.tabs.create({url});
}

interface Props {
  setClick: React.Dispatch<React.SetStateAction<string>>;
}
const SideBar = ({setClick}: Props) => {
  return (
    <section id="sideBarContent">
      <button
        id="options__button"
        type="button"
        onClick={() => {
          setClick('register');
        }}
      >
        Register
      </button>
      <button
        id="options__button"
        type="button"
        onClick={() => {
          setClick('login');
        }}
      >
        Login
      </button>
      <button
        id="options__button"
        type="button"
        onClick={() => {
          setClick('urls');
        }}
      >
        Urls
      </button>
      <button
        id="options__button"
        type="button"
        onClick={(): Promise<Tabs.Tab> => {
          return openWebPage('options.html');
        }}
      >
        setting
      </button>
    </section>
  );
};

export default SideBar;
