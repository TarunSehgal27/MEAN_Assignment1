// import express module using require and store in express constant
const express = require("express");

// making object of express module and store in app constant
const app = express();

// Setting PORT
const port = 3000;

// Setting EJS as the Express app view engine.
app.set("view engine", "ejs");

// Demo posts
const posts = [
  { post: "Post 1", description: "lorem", comments: ["Nice", "good"] },
  { post: "Post 2", description: "lorem ipsum", comments: [] },
  {
    post: "Post 3",
    description: "some description",
    comments: ["comment 1", "comment 2", "comment 3"],
  },
];
posts.forEach((post) => {
  if (post.comments.length)
    post.comments.forEach((comment) => console.log(comment));
});

app.get("/", (req, res) => {
  // Calling the render method on the response object
  res.render("index", {
    // By default, Express will look inside views folder when resolving the template files
    // Sends back the rendered HTML to client
    posts,
  });
});

// Starting app on  http://localhost:3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
