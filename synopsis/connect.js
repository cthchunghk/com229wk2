const connect = require("connect");
const app = connect();

function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

function goodbyeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("The end is near...");
}

app.use(logger);
app.use("/hello", helloWorld);
app.use("/goodbye", goodbyeWorld);
app.listen(3000);
console.log("Server is running @ http://localhost:3000");
