import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ChatpageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.15rem",
}));

export default ChatpageWrapper;
