const express = require("express");
const app = express();
app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Hello World! HAppy Happiest 
  December to All of U People!
  ${date}`);
});
app.listen(3000);
