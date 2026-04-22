// const figlet = require("figlet");

import figlet from "figlet";

figlet("GG!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
