const express = require("express");
const app = express();

console.dir(app);

let port = 3001;

app.listen(port, () => {
  console.log("app is listening on port ${port}");
});

app.get("/", (req, res) => {
  res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
  res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
  res.send("you contacted orange path");
});

app.post("/", (req, res) => {
  res.send("You have requested via post request");
});

app.get("/gg", (req, res) => {
  res.send("Here is the GG");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  html = `<h1>Welcome to the page of ${username}  having id ${id}</h1>`
  res.send(html);
  // res.send(`Welcome to the page of @${username}.`);
});

app.put("/", (req, res) => {
  res.send("You requested via put http method");
});

app.get("/search", (req,res) => {
  let {q} = req.query;
  if(!q)
    res.send("<h1> Nothing search </h1>");
    res.send(`<h1>Search results for query: ${q}</h1>`);
// console.log(req.query);
// res.send("no results");
});

app.use((req, res) => {
  res.send("This path doesnot exist");
});

// app.use((req, res) => {
//   //console.log(req);
//   console.log("request received");
//   // res.send({
//   //   name: "apple",
//   //   color: "red",
//   // });
//   let code = "<h1>Fruits</h1> <ul><li>apple</li><li>Orange</li></ul>";
//   res.send(code);
// });
