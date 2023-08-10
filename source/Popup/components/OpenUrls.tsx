import { Input } from "@mui/material";
import { Button, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { browser } from "webextension-polyfill-ts";
import UrlCard from "./UrlCard";
import PageviewIcon from '@mui/icons-material/Pageview';

interface TabData {
  tabId: number | number[];
  url: string;
  favIconUrl: string;
  title: string;
  status: string;
}

async function openUrls(): Promise<TabData[]> {
  const tabs = await browser.tabs.query({ pinned: false });
  // console.log(JSON.stringify(tabs[0]))
  const tabsData: TabData[] = tabs.map((tab) => ({
    tabId: tab.id || 0,
    url: tab.url || "",
    favIconUrl: tab.favIconUrl || "",
    status: tab.status || "",
    title: tab.title || ""
  }));

  return tabsData;
}

const OpenUrls = () => {
  const [tabData, setTabData] = useState<TabData[]>([]);
  const [searchTab, setSearchTab] = useState<string>("")
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
      console.log("userData-openurl", data.userdata);
    });
  }, []);

    const searchedTab = tabData.filter((tab: TabData) => tab.title.includes(searchTab) || tab.url.includes(searchTab))
  return (
    <>
      <Toolbar>
        <Input
          value={searchTab}
          onChange={(e) => setSearchTab(e.target.value)}
          sx={{ margin: "auto", color: "white", fontSize: "1.2rem" }}
          startAdornment={
            <PageviewIcon sx={{ color: "gray", marginRight: "20px" }} />
          }
          endAdornment={
            <Button
              variant="contained"
              sx={{ color: "white" }}
              onClick={() => {
              }}
            >
              search
            </Button>
          }
          inputProps={{ "aria-label": "tag", color: "gray" }}
          placeholder="search tab"
        />
      </Toolbar>
      <div>
        {searchedTab.map((tab: TabData) => <UrlCard {...{ tabId: tab.tabId, url: tab.url, title: tab.title, favIconUrl: tab.favIconUrl }} />)}
      </div>

    </>
  );
};

export default OpenUrls;
