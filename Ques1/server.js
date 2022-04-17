// import express module using require and store in express constant
const express = require("express");

// making object of express module and store in app constant
const app = express();

// port variable
const port = 3000;

// app.get() will return 'Hello World' using localhost:3000
app.get("/", (req, res) => res.send("Hello World"));

// app.listen() used to listen connections on specified port
// This message displayed if server runs successfully
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
