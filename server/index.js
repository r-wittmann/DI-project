import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

const PORT = 5555;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://ray:ray1234@cluster0.sdytz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running");
        })
    })
    .catch((error) => console.log(error.message));
