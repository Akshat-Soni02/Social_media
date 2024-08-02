import React from "react";
import Navbar from "scenes/navbar/index.jsx";
import { useSelector } from "react-redux";
import UserWidget from "scenes/widgets/UserWidget";
import { Box, useMediaQuery } from "@mui/material";
import ChatsContainer from "./ChatsContainer";

const ChatHome = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar searchBar={true} />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <ChatsContainer />
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatHome;
