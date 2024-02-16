let tasks = [
  { id: 1, title: "tarea 1", isCompleted: false },
  { id: 2, title: "tarea 2", isCompleted: true },
  { id: 3, title: "tarea 3", isCompleted: false },
  { id: 4, title: "tarea 4", isCompleted: true },
  { id: 5, title: "tarea 5", isCompleted: false },
];

const getAllTasks = (req, res) => {
  res.render("index", { title: "Lista de tareas", tasks });
};

const getAddTaskForm = (req, res) => {
  res.render("add", { title: "Agregar tarea" });
};

const addTasks = (req, res) => {
  //se pone en {} porque se va a desestructurar
  let { title } = req.body;
  let id = tasks.length + 1;
  tasks.push({ id, title, isCompleted: false });
  res.redirect("/");
};

const getEditTaskForm = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (!task) {
    res.redirect("/");
  } else {
    res.render("edit", { title: "Editar tarea", task });
  }
};

const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.redirect("/");
  } else {
    tasks[taskIndex].title = req.body.title;
    res.redirect("/");
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.isCompleted = true;
  }
  res.redirect("/");
};

const unclompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.isCompleted = false;
  }
  res.redirect("/");
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.redirect("/");
};

export default {
  getAllTasks,
  getAddTaskForm,
  addTasks,
  getEditTaskForm,
  editTask,
  completeTask,
  unclompleteTask,
  deleteTask,
};
