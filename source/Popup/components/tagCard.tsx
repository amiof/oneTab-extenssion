import { Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'

import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

type props = {
  TagName: string
}
const TagCard = (Props: props) => {
  const { TagName } = Props
  return (
    <Card sx={{ background: "#171616", width: "fit-content", borderRadius: "20px", height: "fit-content", border: "1px solid gray", margin: "15px", ":hover": { border: "1px solid red" } }}>
      <CardContent sx={{ color: "white" }}>
        <Box sx={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton>
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
