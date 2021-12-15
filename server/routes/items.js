import express from "express";
import {createItem, deleteItem, getItem, getItems} from "../controllers/items.js";

const router = express.Router();

router.get('/', getItems);
router.post("/create", createItem);
router.get("/:id", getItem);
router.delete("/:id", deleteItem);

export default router;
