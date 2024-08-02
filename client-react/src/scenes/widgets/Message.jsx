import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

const Message = ({ State }) => {
  return (
    <Box width={"100%"} display={"flex"} justifyContent={State}>
      <Box
        padding={"0.2rem"}
        display={"flex"}
        flexDirection={"column"}
        bgcolor={"#60656F"}
        maxWidth={"43%"}
        paddingX={"0.4rem"}
        borderRadius={"0.2rem"}
        sx={{
          width: "fit-content",
        }}
      >
        <Typography color={"#9ece9a"} fontSize={"0.9rem"}>
          Akshat
        </Typography>
        <Typography>This is a fake message for testing.</Typography>
      </Box>
    </Box>
  );
};

export default Message;
