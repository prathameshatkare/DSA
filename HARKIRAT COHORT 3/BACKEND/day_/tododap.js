const fs = require("fs");
const filepath = "./task.json";

const loadtask = () => {
  try {
    const databuffer = fs.readFileSync("./task.json");
    const datajson = databuffer.toString();
    return JSON.parse(datajson);
  } catch (error) {
    return [];
  }
};

const saveTasks = (task) => {
  const data = JSON.stringify(task);
  fs.writeFileSync(filepath, data);
};

const addTask = (task) => {
  const tasks = loadtask();
  tasks.push(task);
  saveTasks(tasks);
  console.log("tasks has been saved!!!");
};

const listTasks = () => {
  const tasks = loadtask();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task}`));
};

const removeTask = (index) => {
  const tasks = loadtask();
  let newTAsks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (i + 1 == index) {
        continue;
    }else{
        newTAsks.push(tasks[i])
    }
  }
  saveTasks(newTAsks)
  console.log(newTAsks)
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found!");
}
