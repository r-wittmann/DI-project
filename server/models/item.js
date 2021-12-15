import mongoose from "mongoose";

// define a mongoose schema for items
const itemSchema = mongoose.Schema({
    name: String,
});

// construct an item model, using the item schema
const Item = mongoose.model("Item", itemSchema);

export default Item;
