import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let todo = [];
console.log(todo);

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/addtodos", (req, res) => {
  const tododdata = req.body.todo;
  // First: check the type
  if (typeof tododdata !== "string") {
    return res.status(400).json({
      message: "Todo must be text",
    });
  }

  // Second: check for empty text
  if (!tododdata.trim()) {
    return res.status(400).json({
      message: "Todo text is required",
    });
  }
  todo.push({
    id: todo.length + 1,
    todo: tododdata.trim(),
  });

  res.status(201).json({
    msg: "Todo added",
  });
});

app.get("/showtodo", (req, res) => {
  res.json({
    todos: todo,
  });
});

app.put("/update", (req, res) => {
  const updateid = req.body.id;
  const newtodo = req.body.todoupdate;

  for (let i = 0; i < todo.length; i++) {
    if (todo[i].id == updateid) {
      todo[i].todo = newtodo;

      return res.status(200).json({
        msg: "Todo updated successfully",
      });
    }
  }

  return res.status(404).json({
    msg: "Todo not found",
  });
});

app.delete("/delete", (req, res) => {
  const updateid = req.body.id;

  // const existingTodo = todo.find((item) => item.id == updateid);

  // if (!existingTodo) {
  //   return res.status(404).json({
  //     msg: "Todo not found",
  //   });
  // }

  todo = todo.filter((item) => item.id != updateid);

  return res.status(200).json({
    msg: "Todo deleted successfully",
  });
});


app.listen(3000, () => {
  console.log("The server is running on http://localhost:3000");
});
