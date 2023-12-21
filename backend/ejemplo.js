const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})
console.log("Holaaaaaaaaaaaaaaa")
const todos = [
  {
    title: "Todo 1",
    desc: "This is my first Todo",
    completed: true,
  },
  {
    title: "Todo 2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
    title: "Todo 3",
    desc: "This is my third Todo",
    completed: true,
  },

  {
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
];
// Data source ends here

