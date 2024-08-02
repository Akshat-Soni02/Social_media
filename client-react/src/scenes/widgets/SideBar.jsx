import { Box } from "@mui/material";
import React from "react";
import Conversation from "scenes/chat/Conversation";

const SideBar = () => {
  return (
    <Box height={"100%"} width={"21%"} overflow={"auto"}>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </Box>
  );
};

export default SideBar;
