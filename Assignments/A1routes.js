const fs = require('fs');

const assignmentHandler = (req, res) => 
{
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write(
            '<body><p>Hello, and Welcome to my first assignment! Please submit your username.</p><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === `/users`)
    {
        res.write('<html>');
        res.write('<head><title>Users</title></head>')
        res.write('<body><ul><li>Cody Weiss</li><li>Rachael Weiss</li><li>Travis Weiss</li><li>Dale Weiss</li><li>Michele Weiss</li></ul></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === `/create-user` && method === "POST")
    {
        const usernames = [];
        req.on('data', (chunk) =>
        {
            console.log(chunk);
            usernames.push(chunk);
        })
        return req.on('end', () => 
        {
            const parsedUsername = Buffer.concat(usernames).toString();
            console.log(parsedUsername.split('=')[1]);
            const un = parsedUsername.split('=')[1];
            fs.writeFileSync('Usernames.txt', un);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }

    res.setHeader(`Content-Type`, `text/html`);
}

exports.handler = assignmentHandler;