import React, { useState } from "react";
import { Turls } from "./AllUrls";
import "./scss/urlCard.scss";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
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
import { toast } from "react-hot-toast";

//FIXME: favicon is not show in card url
//
//
//
type Tcomander = "openTabs" | "favUrls" | "urls"
type partialTurls = Partial<Turls> & {
  fromComponent?: string;
  status?: string;
  favIconUrl?: string;
  tabId?: number | number[];
  comander?: Tcomander
};

const UrlCard = ({ tabId, url, title, comander, id, fav }: partialTurls) => {
  const [removed, setRemoved] = useState<boolean>(false)
  const [resRemove, setResRemove] = useState<boolean>(false)

  const removeFav = () => {
    fetch("http://localhost:3000/fav-urls/deleteFav", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then(res => res.json())
      .then(async data => await setResRemove(data?.removedStatus))
  }
  const removeTab = () => {
    if (tabId && comander == "openTabs") {
      browser.tabs.remove(tabId);
      setRemoved(true)
    } else if (comander == "favUrls") {
      removeFav()
      // console.log("resRemove:", resRemove)
      // setRemoved(resRemove)
      setRemoved(true)
      if (resRemove)
        console.log("removed:", removed)
      toast.success("your url removed from fav", {
        // icon: '👏',
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

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
          border: removed ? "1px solid red" : "1px solid gray",
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
        {!fav?.id ?
          <AiOutlineStar className="icons" color="yellow" onClick={() => { }} />
          : <AiFillStar className="icons" color="yellow"> </AiFillStar>
        }
      </div>
    </div>
  );
};

export default UrlCard;
