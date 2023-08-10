import React, { useState } from "react";
import { Turls } from "./AllUrls";
import "./scss/urlCard.scss";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { browser } from "webextension-polyfill-ts";

//FIXME: favicon is not show in card url
//
//
//
type partialTurls = Partial<Turls> & {
  fromComponent?: string;
  status?: string;
  favIconUrl?: string;
  tabId?: number | number[];
};
const UrlCard = ({ tabId, url, title }: partialTurls) => {
  const [removed, setRemoved] = useState<boolean>(false)
  const removeTab = () => {
    if (tabId) {
      browser.tabs.remove(tabId);
      setRemoved(true)
    }
  };
  // Use the useEffect() hook to fetch the image and create a URL for it
  const openurl = (url: string) => {
    if (tabId) {
      tabSwitch()
    } else {
      browser.tabs.create({ url: url })
    }
  }

  const tabSwitch = () => {
    if (tabId) {
      if (Array.isArray(tabId)) return
      browser.tabs.update(tabId, { active: true });
    }
  };
  return (
    <div id="record">
      <Accordion
        sx={{
          width: "70%",
          marginY: "5px",
          background: "#201e1e",
          color: "white",
          border: removed? "1px solid red":"1px solid gray",
          borderRadius: "10px",
        }}

      >
        <AccordionSummary>{title}</AccordionSummary>
        <AccordionDetails>{url}</AccordionDetails>
        <CardActionArea>
          <CardActions>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeTab()}
            >
              <AiFillDelete className="icons" color="red" />
            </Button>
            <Button variant="outlined" color="primary">
              <AiOutlineStar
                className="icons"
                color="yellow"
                onClick={() => { }}
              />
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => { url && openurl(url) }} >
              <BiShowAlt className="icons" color="green" />
            </Button>
          </CardActions>
        </CardActionArea>
      </Accordion>
      <div id="ButtonContainer">
        <BiShowAlt className="icons" color="green" onClick={() => url && openurl(url)} />
        <AiFillDelete
          className="icons"
          color="red"
          onClick={() => removeTab()}
        />
        <AiOutlineStar className="icons" color="yellow" onClick={() => { }} />
      </div>
    </div>
  );
};

export default UrlCard;
