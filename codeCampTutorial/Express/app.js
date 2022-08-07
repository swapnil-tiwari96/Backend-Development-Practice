const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Better to send status. 
app.get('/', (req, res) =>
{
    res.status(200).send('Home page')
})

app.get('/about', (req, res) =>
{
    res.status(200).send('About Page')
})

app.all('*', (req, res) =>
{
    res.status(404).send('Resource not found')
})

app.listen(port, () =>
{
    console.log(`Server is listening on ${port}`)
})