const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile("Hello World!");
});

app.get("/page", (request, response) => {
  let date = new Date();
  response.sendFile(`Hello World! HAppy Happiest December to
   All of U People! ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", {
    root: __dirname,
  });
});
app.listen(3000);
