import Item from "../models/item.js";

export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createItem = async (req, res) => {
    const item = req.body;
    const newItem = new Item(item);

    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getItem = async (req, res) => {
    const id = req.params.id;

    try {
        const item = await Item.findById(id);
        res.status(200).json(item);
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

export const deleteItem = async (req, res) => {
    const id = req.params.id;

    try {
        await Item.findByIdAndDelete(id);
        res.status(200).json({ message: "successfully deleted item"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
