const express = require("express")
const app = express();

// Routes
app.get("/", function (req, res)
{
    res.send("Hello People")
})

app.get("/contact", function (req, res)
{
    res.send("Contact me lets go")
})

app.listen(3000, function ()
{
    console.log("Server started on port 3000")
})