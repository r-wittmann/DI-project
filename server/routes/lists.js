import express from "express";
import {getLists, getList, deleteList, createList, updateList} from "../controllers/lists.js";

// get the router object from the express router
const router = express.Router();

// define routes and what logic they should connect to
router.get("/", getLists);
router.post("/create", createList);
// adding a /:id to the route means that I can call /items/abcd in the
// browser and the application interprets "abcd" as a parameter called id
router.get("/:id", getList);
router.put("/:id", updateList);
router.delete("/:id", deleteList);

export default router;
