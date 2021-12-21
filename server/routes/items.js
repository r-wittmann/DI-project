import express from "express";
import {getItems, getItem, createItem, updateItem, deleteItem} from "../controllers/items.js";

// get the router object from the express router
const router = express.Router();

// define routes and what logic they should connect to
// adding a /:id to the route means that I can call /items/abcd in the
// browser and the application interprets "abcd" as a parameter called id
router.get('/', getItems);
router.post("/", createItem);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
