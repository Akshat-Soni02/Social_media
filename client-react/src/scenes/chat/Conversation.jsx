import { Box, Typography, useTheme } from "@mui/material";
import StatusAvatar from "components/StatusAvatar";
import React from "react";

const Conversation = () => {
  const theme = useTheme();
  const main = theme.palette.neutral.light;
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={"center"}
        gap={"10px"}
        padding={"1rem"}
        sx={{
          "&:hover": {
            backgroundColor: main,
            cursor: "pointer",
          },
        }}
        width={"100%"}
        paddingRight={"2rem"}
      >
        {" "}
        <StatusAvatar /> <Typography fontSize={"1.15rem"}>Jane Doe</Typography>
      </Box>
    </>
  );
};

export default Conversation;
