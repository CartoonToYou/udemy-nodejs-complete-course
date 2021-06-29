const requestHandler = (req, res) => {
  const { url, method } = req;

  if (url === "/") {
    res.write("<html>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Nodejs example</title></head>");
    res.write("<body><ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("</ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const newUser = parsedBody.split("=")[1];
      console.log(newUser);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Nodejs example</title></head>");
  res.write("<body><h1>Hello from NodeJS Examination</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  handler: requestHandler,
};
