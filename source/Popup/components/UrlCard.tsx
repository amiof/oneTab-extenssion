import React, { useState } from "react";
import { Turls } from "./AllUrls";
import "./scss/urlCard.scss";
import { BiShowAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { browser } from "webextension-polyfill-ts";

type partialTurls=Partial<Turls>
const UrlCard = ({ id, url, title }: partialTurls) => {
  const [more, setMore] = useState<boolean>(false);
  console.log(id);
  return (
    <div id="record">
      <div id="Container">
        <div className="content">
          <div className="tit">
            <p>{title}</p>
            <p className={!more ? "hidden" : ""}>{url}</p>
          </div>
          <p
            onClick={(): Promise<void> => {
              return browser.tabs
                .query({pinned:false })
                .then((tabs) => {
                  // const activeTab = tabs[0];
                  // return browser.tabs.create({ url: activeTab.url });
                  console.log(tabs)
                });
            }}
          >
            open
          </p>
        </div>
      </div>
      <div id="ButtonContainer">
        <BiShowAlt
          className="icons"
          color="yellow"
          onClick={() => {
            setMore(!more);
          }}
        ></BiShowAlt>

        <AiFillDelete
          className="icons"
          color="red"
          onClick={() => {
            setMore(!more);
          }}
        />
        <AiOutlineStar
          className="icons"
          color="yellow"
          onClick={() => {
            setMore(!more);
          }}
        />
      </div>
    </div>
  );
};

export default UrlCard;
