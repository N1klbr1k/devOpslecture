const express = require("express");
const path = require("path");

const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "6e3808d0a11d4513a06636d6547b55c7",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4545;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
