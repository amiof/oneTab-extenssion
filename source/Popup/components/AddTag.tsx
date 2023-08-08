import { Box, Button, Input, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";

import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import TagCard from "./tagCard";

const AddTag = () => {
  const [tagName, setTagName] = useState<string>("");
  const [tags, setTags] = useState<tagRes[]>([]);
  type tagRes = {
    id: string;
    TagName: string;
    CreateAt: string;
  };
  const getTags = () => {
    fetch("http://localhost:3000/tag/usertag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "ali7@gmai.com" }),
    })
      .then((res) => res.json())
      .then((data) => setTags(data))
      .then(() => console.log(tags))
  };
  const addTag = () => {
    console.log("clicke to add Tag")
    getTags();
  };
  useEffect(() => {
    getTags();
  }, []);
  return (
    <div style={{ width: "100%", marginTop: "50px" }}>
      <Toolbar>
        <Input
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          sx={{
            margin: "auto",
            color: "white",
            "--Input-decoratorChildHeight": "40px",
            "--Input-gap": "31px",
            "--Input-radius": "23px",
            fontSize: "1.2rem",
          }}
          startAdornment={
            <TagOutlinedIcon sx={{ color: "gray", marginRight: "20px" }} />
          }
          endAdornment={
            <Button
              variant="contained"
              sx={{ color: "white" }}
              onClick={() => { addTag() }}
            >
              AddTag
            </Button>
          }
          inputProps={{ "aria-label": "tag", color: "gray" }}
          placeholder="type your tag"
        />
      </Toolbar>
      <Box sx={{ display: "flex", flex: "auto" }}>
        {tags.map((tag) => <TagCard key={tag.id} TagName={tag.TagName} />)}

      </Box>
    </div>
  );
};

export default AddTag;
