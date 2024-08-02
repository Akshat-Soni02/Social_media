import { Box, Typography } from "@mui/material";
import React from "react";
import { TiMessages } from "react-icons/ti";

const NoChatSelected = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"79%"}
      height={"100%"}
    >
      <Box
        paddingX={"4px"}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography fontSize={"1.1rem"}>Welcome Jane Doe </Typography>
        <Typography fontSize={"1.2rem"}>
          Select a chat to start messaging
        </Typography>
        <Typography fontSize={"1.7rem"}>
          <TiMessages />
        </Typography>
      </Box>
    </Box>
  );
};

export default NoChatSelected;
