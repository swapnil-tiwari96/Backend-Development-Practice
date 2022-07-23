import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/index.html");
})

app.use(express.urlencoded({ extended: true }))
app.post("/", (req, res) =>
{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(`Result is ${result}`);
})

app.listen(3000, () =>
{
    console.log("Running on port 3000")
})