import { Box, Button, Input, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
type TfavUrls = {
  id: string;
  url: string;
  title: string;
  CreateAt: string;
};
import UrlCard from "./UrlCard";
const FavUrls = () => {
  const [favUrls, setFavUrls] = useState<TfavUrls[]>([]);
  const [searched, setSearched] = useState<string>("")
  const getFavUrls = () => {
    fetch("http://localhost:3000/fav-urls/getFavsUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "ali7@gmai.com" }),
    })
      .then((res) => res.json())
      .then((data) => setFavUrls(data))
      .then(() => console.log(favUrls))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getFavUrls();
  }, []);
    const searchedFav = favUrls.filter((fav: TfavUrls) => fav.title.includes(searched) || fav.url.includes(searched))


  return (
    <div>
      <Box>
        <Toolbar>
          <Input
            color="error"
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            sx={{
              margin: "auto",
              color: "white",
              borderRadius:"10px",
              "--Input-decoratorChildHeight": "40px",
              "--Input-gap": "31px",
              "--Input-radius": "23px",
              fontSize: "1.2rem",
            }}
            startAdornment={
              <SavedSearchIcon sx={{ color: "gray", marginRight: "20px" }}/>
            }
            endAdornment={
              <Button
                variant="contained"
                color="error"
                sx={{ color: "white" }}
                onClick={() => {
                  getFavUrls();
                }}
              >
                Search
              </Button>
            }
            inputProps={{ "aria-label": "tag", color: "gray" }}
            placeholder="search title or url"
          />
        </Toolbar>

      </Box>
      {searchedFav.map((favUrl) => (
        <UrlCard id={favUrl.id} title={favUrl.title} url={favUrl.url} />
      ))}
    </div>
  );
};

export default FavUrls;
