import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// import routers here
import itemsRouter from "./routes/items.js";
import listsRouter from "./routes/lists.js";
import usersRouter from "./routes/users.js";

// assign an express process to the app variable
const app = express();

// define the port, the backend application will run on
const PORT = 5555;

// configure the app to use bodyParser and set a default parameter
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// configure the app to enable cross origin resource sharing (cors)
app.use(cors());

// configure the app to use our routs
app.use("/items", itemsRouter);
app.use("/lists", listsRouter);
app.use("/users", usersRouter);

// set up the connection to the database and start the app, once the connection is established
const CONNECTION_URL = "mongodb+srv://ray:ray1234@cluster0.sdytz.mongodb.net/shoppinglist?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running");
        })
    })
    .catch((error) => console.log(error.message));
// set another default value for mongoose
mongoose.set("returnOriginal", false);
