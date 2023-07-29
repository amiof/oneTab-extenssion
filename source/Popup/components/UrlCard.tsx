import React from "react";
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
import Favicon from "./favicon";

//FIXME: favicon is not show in card url and it is blured
//
//
//
type partialTurls = Partial<Turls> & {
  fromComponent?: string;
  status?: string;
  favIconUrl?: string;
  tabId?: number | number[];
};
const UrlCard = ({ tabId, url, title , favIconUrl}: partialTurls) => {
  const removeTab = () => {
    if (tabId) {
      browser.tabs.remove(tabId);
    }
  };
  // Use the useEffect() hook to fetch the image and create a URL for it

  return (
    <div id="record">
      <Accordion
        sx={{
          width: "70%",
          marginY: "5px",
          background: "#201e1e",
          color: "white",
          border: "1px solid gray",
        }}
      >
        <AccordionSummary>
        {url ? <Favicon urls={{url,favIconUrls:favIconUrl}}></Favicon> : null}
          {title}</AccordionSummary>
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
                onClick={() => {}}
              />
            </Button>
            <Button variant="outlined" color="secondary">
              <BiShowAlt className="icons" color="green" onClick={() => {}} />
            </Button>
          </CardActions>
        </CardActionArea>
      </Accordion>
      <div id="ButtonContainer">
        <BiShowAlt className="icons" color="green" onClick={() => {}} />
        <AiFillDelete
          className="icons"
          color="red"
          onClick={() => removeTab()}
        />
        <AiOutlineStar className="icons" color="yellow" onClick={() => {}} />
      </div>
    </div>
  );
};

export default UrlCard;
