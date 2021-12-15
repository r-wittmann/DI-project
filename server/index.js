import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import itemsRouter from "./routes/items.js";

const app = express();

const PORT = 5555;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/items", itemsRouter);

const CONNECTION_URL = "mongodb+srv://ray:ray1234@cluster0.sdytz.mongodb.net/shoppinglist?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running");
        })
    })
    .catch((error) => console.log(error.message));
