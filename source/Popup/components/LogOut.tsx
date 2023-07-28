import { Box, Button, Card, CardActions, CardContent, CardHeader, makeStyles, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { browser } from "webextension-polyfill-ts";
import { Tuser } from "./AllUrls";

const LogOut = () => {
  const [userData, setUserData] = useState<Tuser>();
  useEffect(() => {
    const storage = browser.storage.local.get("userData");
    storage.then((data) => setUserData(data.userData));
  }, []);

  const clickHandler = () => {
    browser.storage.local.remove("userData");
  };


  return (
    <Container maxWidth="xs" sx={{ marginTop: "60px" }}>
      <Box>
        <Card variant="outlined">
          <CardHeader title={`hi ${userData?.first_name}`} sx={{ background: "#171616", color: "white" }} />

          <CardContent style={{ background: "#171616", color: "white" }}>
            <Typography variant="h5">`your urls is  `{userData?.first_name}</Typography>
          </CardContent>

          <CardActions>
            <Button variant="contained" size="small" sx={{ ":hover": { backgroundColor: "red" } }} onClick={clickHandler}>
              logout
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default LogOut;
