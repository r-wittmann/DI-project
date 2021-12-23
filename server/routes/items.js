import express from "express";
import {getItems, getItem, createItem, updateItem, deleteItem} from "../controllers/items.js";
import {authenticateJWT} from "../services/authentication.js";

// get the router object from the express router
const router = express.Router();

// define routes and what logic they should connect to
// adding a /:id to the route means that I can call /items/abcd in the
// browser and the application interprets "abcd" as a parameter called id
// function authenticateJWT is called as a middleware to check authenticity of token
router.get("/", authenticateJWT, getItems);
router.post("/", authenticateJWT, createItem);
router.get("/:id", authenticateJWT, getItem);
router.put("/:id", authenticateJWT, updateItem);
router.delete("/:id", authenticateJWT, deleteItem);

export default router;
