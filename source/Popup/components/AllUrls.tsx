import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
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

  function getDataUrls() {
    return fetch("http://localhost:3000/urls")
      .then((res) => res.json())
      .then((data) => {
        setUrls(data);
      });
  }

  useEffect(() => {
    getDataUrls();
  }, []);

  console.log("outSide", urls[0]);

  return (
    <>
      {urls[0]?.id ? (
        urls.map((url) => <UrlCard key={url.id} {...url}></UrlCard>)
      ) : (
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
