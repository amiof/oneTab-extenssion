import React, { useState } from "react";
import { Turls } from "./AllUrls";
import "./scss/urlCard.scss";

const UrlCard = ({ id, url, title }: Turls) => {
  const [more, setMore] = useState<boolean>(false);
  console.log(id);
  return (
    <div>
      <div id="Container">
        <div className="content">
          <div className="tit">
            <p>{title}</p>
            <p className={!more ? "hidden" : ""}>{url}</p>
          </div>
          <div>
            <button className="more"
              onClick={() => {
                setMore(!more);
              }}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;
