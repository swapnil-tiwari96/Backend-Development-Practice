import express from "express";
import https from "https";
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
    let query = req.body.cityName;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1c0ab3284d13ff5669e595563a03fc85&units=metric`
    https.get(URL, (response) =>
    {
        response.on("data", data =>
        {
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            const feelsLike = weatherData.main.feels_like;
            const desc = weatherData.weather[0].description;
            res.write(`${temperature}, `);
            res.write(`Feels like ${feelsLike}, `);
            res.write(`Description: ${desc}, `);
            res.write(`${imageURL}`);
            res.send()
        })
    })
})

app.listen(3000, () =>
{
    console.log("Server is running on port 3000")
})