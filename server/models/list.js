import mongoose from "mongoose";

// define a mongoose schema for shopping lists
const listSchema = mongoose.Schema({
    listName: { type: String, unique: true },
    content: [String]
})

// construct a list model, using the list schema
const List = mongoose.model("List", listSchema);

export default List;
