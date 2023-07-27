import React, { useState, useEffect } from "react";
import { browser } from "webextension-polyfill-ts";
import UrlCard from "./UrlCard";

interface TabData {
  id: number | null;
  url: string;
  favIconUrl: string;
  title: string;
  status: string;
}

async function openUrls(): Promise<TabData[]> {
  const tabs = await browser.tabs.query({ pinned: false });

  const tabsData: TabData[] = tabs.map((tab) => ({
    id: tab.id || null,
    url: tab.url || "",
    favIconUrl: tab.favIconUrl || "",
    status: tab.status || "",
    title: tab.title || ""
  }));

  console.log(tabsData);
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
      console.log(data.userdata);
    });
  }, []);

  return (
    <div>
      {tabData.map((tab: TabData) => <UrlCard {...{id:String(tab.id),url:tab.url,title:tab.title}}/>)}
    </div>
  );
};

export default OpenUrls;
