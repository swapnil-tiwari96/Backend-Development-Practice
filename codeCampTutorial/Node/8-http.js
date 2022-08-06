const http = require("http")
const server = http.createServer((req, res) =>
{
    if (req.url === '/')
    {
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about')
    {
        res.end('Our history');
    }
    else
    {
        res.end('error')
    }
})

server.listen(3000, () =>
{
    console.log("server has started running");
})