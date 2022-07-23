import express from "express";
import https from "https";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req, res) =>
{
    let name = req.body.name;
    let email = req.body.email;
    console.log(name, email);
})

app.listen(3000, () =>
{
    console.log("Server is running on port 3000");
})

