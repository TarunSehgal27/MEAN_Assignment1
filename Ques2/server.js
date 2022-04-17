// import express module using require and store in express constant
const express = require("express");

// importing path module
// Used for file and directory paths
const path = require("path");

// import routes.js file in server.js file
// The routes.js is reponsible for routes of the response view as output
const routes = require("./routes");

// making object of express module and store in app constant
const app = express();

// Adding Bootstrap css
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
// Adding Bootstrap js
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
// Adding Jquery
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

// using routes as middleware
app.use("/", routes);

// port variable
const port = 3000;

// app.listen() used to listen connections on specified port
// it will console a message if server runs successfully
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
