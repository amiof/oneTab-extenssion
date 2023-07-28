import React, { useState, useEffect } from "react";
import { browser } from "webextension-polyfill-ts";
import UrlCard from "./UrlCard";

interface TabData {
  tabId: number | number[] ;
  url: string;
  favIconUrl: string;
  title: string;
  status: string;
}

async function openUrls(): Promise<TabData[]> {
  const tabs = await browser.tabs.query({ pinned: false });

  // console.log(JSON.stringify(tabs[0]))
  const tabsData: TabData[] = tabs.map((tab) => ({
    tabId: tab.id || 0 ,
    url: tab.url || "",
    favIconUrl: tab.favIconUrl || "",
    status: tab.status || "",
    title: tab.title || ""
  }));

  return tabsData;
}

const OpenUrls = () => {
  const [tabData, setTabData] = useState<TabData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const urls = await openUrls();
      setTabData(urls);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const storage = browser.storage.local.get("userdata");

    storage.then((data) => {
      console.log("userData-openurl",data.userdata);
    });
  }, []);

  return (
    <div>
      {tabData.map((tab: TabData) => <UrlCard {...{tabId:tab.tabId,url:tab.url,title:tab.title,favIconUrl:tab.favIconUrl}}/>)}
    </div>
  );
};

export default OpenUrls;
