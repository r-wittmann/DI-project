import express from "express";
import { signUp, login } from "../controllers/users.js";

// get the router object from the express router
const router = express.Router();

// define routes and what logic they should connect to
router.post("/signup", signUp);
router.post("/login", login);

export default router;
