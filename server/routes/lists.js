import express from "express";
import {getLists, getList, deleteList, createList, updateList} from "../controllers/lists.js";
import {authenticateJWT} from "../services/authentication.js";

// get the router object from the express router
const router = express.Router();

// define routes and what logic they should connect to
// adding a /:id to the route means that I can call /items/abcd in the
// browser and the application interprets "abcd" as a parameter called id
// function authenticateJWT is called as a middleware to check authenticity of token
router.get("/", authenticateJWT, getLists);
router.post("/", authenticateJWT, createList);
router.get("/:id", authenticateJWT, getList);
router.put("/:id", authenticateJWT, updateList);
router.delete("/:id", authenticateJWT, deleteList);

export default router;
