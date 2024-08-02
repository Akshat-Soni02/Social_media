import React, { useState } from "react";
import MessageContainer from "scenes/widgets/MessageContainer";
import SideBar from "scenes/widgets/SideBar";
import { Box, useTheme } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import ChatpageWrapper from "components/ChatpageWrapper";
import NoChatSelected from "scenes/widgets/NoChatSelected";

const ChatsContainer = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const noChatSelected = false;

  return (
    <ChatpageWrapper
      display="flex"
      flexDirection="row"
      height={"545px"}
      width={"985px"}
    >
      <SideBar />
      {noChatSelected ? <NoChatSelected /> : <MessageContainer />}
    </ChatpageWrapper>
  );
};

export default ChatsContainer;

//   display="flex"
//   flexDirection="row"
//   justifyContent="space-between"
//   bgcolor={alt}
//   padding={"1rem"}
//   width={"80%"}
