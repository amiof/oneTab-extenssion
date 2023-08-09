import { Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'

import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const deleteTag = (tagId: string) => {
  fetch(`http://localhost:3000/tag/RemoveTag/${tagId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "ali7@gmai.com" }),
  })
}
type props = {
  TagName: string
  TagId: string
  setRemoved: React.Dispatch<React.SetStateAction<string>>
}
const TagCard = (Props: props) => {
  const { TagName, TagId, setRemoved } = Props
  return (
    <Card sx={{ background: "#171616", width: "fit-content", borderRadius: "20px", height: "fit-content", border: "1px solid gray", margin: "15px", ":hover": { border: "1px solid red" } }}>
      <CardContent sx={{ color: "white" }}>
        <Box sx={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton onClick={() => { deleteTag(TagId); setRemoved(TagId) }}>
            <HighlightOffOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography fontSize="17px">
            {TagName}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TagCard
