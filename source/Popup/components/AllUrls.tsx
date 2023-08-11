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

  function getDataUrls(): Promise<void> {
    return fetch("http://localhost:3000/urls")
      .then((res) => res.json())
      .then((data) => {
        setUrls(data);
      });
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
    getDataUrls();
    getHeader()
  }, []);

  console.log("outSide", urls[0]);

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
          <ListSubheader component="div" id="nested-list-subheader" sx={{ color: "white", background: "#171616" }}>
            Nested List Items
          </ListSubheader>
        }
      >
        {headers.map((header) => <>
          <ListItemButton onClick={() => { setColaps(!colaps) }}>
            <ListItemText primary={header.headerName} />
          </ListItemButton>
          <Collapse in={colaps} timeout="auto">
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
      {urls[0]?.id ? (
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
