import express from "express";
import {createItem, deleteItem, getItem, getItems} from "../controllers/items.js";

// get the router object from the express router
const router = express.Router();

// define routes and what logic they should connect to
router.get('/', getItems);
router.post("/create", createItem);
// adding a /:id to the route means that I can call /items/abcd in the
// browser and the application interprets "abcd" as a parameter called id
router.get("/:id", getItem);
router.delete("/:id", deleteItem);

export default router;
