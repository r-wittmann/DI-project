import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name: String,
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
