/**
 * Static server
 */
const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT);
app.use(helmet());
app.use(express.static(__dirname + '/public'));

console.log("Server Running on " + PORT);

if (process.env.NODE_ENV === "production") {

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}