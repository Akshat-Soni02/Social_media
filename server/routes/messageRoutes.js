import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { sendMessage } from "../controllers/messageController.js";

const router = express.Router();

/* Post */
router.post("/send/:id", verifyToken, sendMessage);

export default router;
