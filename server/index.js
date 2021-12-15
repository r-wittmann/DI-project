import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const PORT = 5432;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
