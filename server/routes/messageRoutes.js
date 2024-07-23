import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { sendMessage, getMessages } from "../controllers/messageController.js";

const router = express.Router();

/* Post */
router.post("/send/:id", verifyToken, sendMessage);

/* GET */
router.get("/:id", verifyToken, getMessages);

export default router;
