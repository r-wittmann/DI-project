import List from "../models/list.js";

// requests and returns the list of all shopping lists from the database
export const getLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.status(200).json(lists);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// creates a new shopping list and saves it to the database
export const createList = async (req, res) => {
    const list = req.body;
    const newList = new List(list);
    try {
        await newList.save();
        res.status(201).json(newList);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// gets and returns a single shopping list from the database, identified by its id
export const getList = async (req, res) => {
    const id = req.params.id;
    try {
        const list = await List.findById(id);
        res.status(200).json(list);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// updates a shopping list, identified by its id
export const updateList = async (req, res) => {
    const id = req.params.id;
    const list = req.body;
    try {
        const updatedList = await List.findByIdAndUpdate(id, list);
        res.status(200).json(updatedList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// deletes a shopping list from the database, identified by its id
export const deleteList = async (req, res) => {
    const id = req.params.id;
    try {
        await List.findByIdAndDelete(id);
        res.status(200).json({ message: "successfully deleted list"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
