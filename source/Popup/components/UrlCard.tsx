import React, { useState } from "react";
import { Turls } from "./AllUrls";
import "./scss/urlCard.scss";
import { BiShowAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { browser } from "webextension-polyfill-ts";



//FIXME: favicon is not show in card url
//
//
//
type partialTurls = Partial<Turls> & {
  fromComponent?: string;
  status?: string;
  favIconUrl?: string;
};
const UrlCard = ({ id, url, title }: partialTurls) => {
  const [more, setMore] = useState<boolean>(false);
  console.log(id);
  const favIconUrls = url + "/favicon.ico";
  const [image, setImage] = useState<string | undefined>(undefined);

  // Use the useEffect() hook to fetch the image and create a URL for it
  React.useEffect(() => {
    fetch(favIconUrls)
      .then((response) => response.blob())
      .then((blob) => {
        setImage(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.error(`Error fetching favicon for ${url}: ${error}`);
      });
  }, [favIconUrls]);

  return (
    <div id="record">
      {image && <img src={image}  alt="Favicon" style={{ width: "32px" }}/>}
      <div id="Container">
        <div className="content">
          <div className="tit">
            {console.log(url + "/favicon.ico")}
            <p>{title}</p>
            <p className={!more ? "hidden" : ""}>{url}</p>
          </div>
          <p
            onClick={(): Promise<void> => {
              return browser.tabs.query({ pinned: false }).then((tabs) => {
                // const activeTab = tabs[0];
                // return browser.tabs.create({ url: activeTab.url });
                console.log(tabs);
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
