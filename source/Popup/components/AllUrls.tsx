import { CircularProgress, Collapse, List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./scss/allUrls.scss";
import UrlCard from "./UrlCard";

export type Tuser = {
  id: string;
  email: string;
  userName: string;
  first_name: string;
  last_name: string;
  password: string;
  age: number;
  JwtToken: string;
};
export type Tfav = {
  id: string;
  user?: Tuser;
};
export type Ttag = {
  id: string;
  TagName: string;
  CreateAt: Date;
  user?: Tuser;
};
export type Theader = {
  id: string;
  headerName: string;
  CreateAt: Date;
  user?: Tuser;
};
export type Turls = {
  id: string;
  url: string;
  title: string;
  user: Tuser;
  fav?: Tfav;
  tag?: Ttag[];
  header?: Theader[];
  createAt: string;
};
const AllUrls = () => {
  const [urls, setUrls] = useState<Turls[]>([]);
  const [colaps, setColaps] = useState<boolean>(false)
  const [headers, setHeaders] = useState<Theader[]>([])
  const [headerIds, setHeaderIds] = useState<string>("")


  function getDataUrls(headerId: string): Promise<void> {
    console.log(headerId)
    return fetch("http://localhost:3000/headers/getHeaderById", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ headerId: headerId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUrls(data.urls);
      })
      .then((data) => console.log(data))
  }

  function getHeader(): Promise<void> {
    return fetch("http://localhost:3000/headers/userHeader", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: "ali7@gmai.com" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setHeaders(data);
      });
  }

  useEffect(() => {
    getHeader()
  }, []);

  // console.log("outSide", urls[0]);
  const openSelectedColaps = (headerId: string) => {
    setHeaderIds(headerId)
    setColaps(!colaps)
    getDataUrls(headerId)
  }
  const checkOpen = (id: string): boolean | undefined => {
    return headerIds == id ? !colaps : false

  }

  return (
    <>
      <List
        sx={{
          width: '100%',
          background: "#171616",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Box sx={{ display: "flex" }}>
            <ListSubheader component="div" id="nested-list-subheader" sx={{ color: "white", background: "#171616" }}>
              Headers List
            </ListSubheader>
            <ListSubheader component="div" id="nested-list-subheader" sx={{ color: "white", background: "#171616" }}>
              selected headers urls : {urls.length}
            </ListSubheader>
          </Box>

        }
      >
        {headers.map((header) => <>
          <ListItemButton onClick={() => { openSelectedColaps(header.id) }}>
            <ListItemText primary={header.headerName} sx={{ fontSize: "bold" }} />
            <ListItemText primary={header.CreateAt} sx={{ color: "red" }} />
          </ListItemButton>
          <Collapse in={checkOpen(header.id)} timeout="auto">
            {urls[0]?.id ?
              urls.map((url) => <UrlCard key={url.id} {...url}></UrlCard>) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginY: "30%",
                  }}>
                  <CircularProgress />
                </Box>
              )}
          </Collapse>
        </>
        )}


      </List>
      {headers[0]?.id ? (
        // urls.map((url) => <UrlCard key={url.id} {...url}></UrlCard>)
        <div></div>
      )
        : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginY: "30%",
            }}
          >
            <CircularProgress />
          </Box>
        )}
    </>
  );
};

export default AllUrls;
