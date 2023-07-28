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
  console.log(id);

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
        <AccordionSummary>{title}</AccordionSummary>
        <AccordionDetails>{url}</AccordionDetails>
        <CardActionArea>
          <CardActions>
            <Button variant="outlined" color="error">
              <AiFillDelete className="icons" color="red" onClick={() => { }} />
            </Button>
            <Button variant="outlined" color="primary">
              <AiOutlineStar
                className="icons"
                color="yellow"
                onClick={() => { }}
              />
            </Button>
            <Button variant="outlined" color="secondary">
              <BiShowAlt className="icons" color="green" onClick={() => { }} />
            </Button>
          </CardActions>
        </CardActionArea>
      </Accordion>
      <div id="ButtonContainer">
        <BiShowAlt className="icons" color="green" onClick={() => { }} />
        <AiFillDelete className="icons" color="red" onClick={() => { }} />
        <AiOutlineStar className="icons" color="yellow" onClick={() => { }} />
      </div>
    </div>
  );
};

export default UrlCard;
