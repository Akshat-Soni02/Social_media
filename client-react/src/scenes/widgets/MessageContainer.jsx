import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./messageContainer.css";
import Message from "./Message";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <Box width={"79%"} height={"100%"}>
      <span>
        {/* <span>To:</span> <span>Jane Doe</span> */}
        <div className="messageHeader">
          <Typography
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            gap={"0.5rem"}
          >
            To: <span>Jane Doe</span>
          </Typography>
        </div>
      </span>
      <div className="personChats">
        <Message State="end" />
        <Message State="start" />
        <Message State="end" />
        <Message State="end" />
        <Message State="start" />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="inputMess">
        <MessageInput />
      </div>
    </Box>
  );
};

export default MessageContainer;
