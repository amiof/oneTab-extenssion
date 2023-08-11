import { Box, Button, Input, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";

import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import TagCard from "./tagCard";
import { toast, Toaster } from "react-hot-toast";
//FIXME: this a  bug when add tag dont refresh tag content and dont show it a allow add same name tag 
const AddTag = () => {
  const [tagName, setTagName] = useState<string>("");
  const [tags, setTags] = useState<tagRes[]>([]);
  const [remvoed, setRemoved] = useState<string>("");
  type tagRes = {
    id: string;
    TagName: string;
    CreateAt: string;
  };
  const getTags = () => {
    fetch("http://localhost:3000/tag/usertag", {
      method: "POST",
      headers: {
        // "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "ali7@gmai.com" }),
    })
      .then((res) => res.json())
      .then((data) => setTags(data));
    // .then(() => console.log(tags))
  };
  const checkTag = () => {
    const tagExist = tags.some((tag) => tag.TagName == tagName);
    return tagExist;
  };

  const addTag = async () => {
    const exist = checkTag();
    if (!exist) {
      // console.log("im in fetch add")
      fetch("http://localhost:3000/tag", {
        method: "POST",
        headers: {
          // "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          TagName: tagName,
          email: "ali7@gmai.com",
        }),
      })
        .then((res) => res.json())
        // .then(data => console.log(data))
        .catch((error) => console.log(error));
    } else {
      // console.log("i am in toast")
      toast.error("this tagName available add other name", {
        // icon: '👏',
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    getTags();
  };
  useEffect(() => {
    getTags();
  }, [remvoed]);
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
              onClick={() => {
                addTag();
              }}
            >
              AddTag
            </Button>
          }
          inputProps={{ "aria-label": "tag", color: "gray" }}
          placeholder="type your tagName"
        />
      </Toolbar>
      <Box sx={{ display: "flex", flex: "auto", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <TagCard
            key={tag.id}
            TagName={tag.TagName}
            TagId={tag.id}
            setRemoved={setRemoved}
          />
        ))}
      </Box>
      <Toaster />
    </div>
  );
};

export default AddTag;
