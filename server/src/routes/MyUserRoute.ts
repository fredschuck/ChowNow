import express from "express";
import { jwtCheck } from "../middleware/auth";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentUser);

export default router;
