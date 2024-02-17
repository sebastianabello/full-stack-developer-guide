let tasks = [
  { id: 1, title: "tarea 1", isCompleted: false },
  { id: 2, title: "tarea 2", isCompleted: true },
  { id: 3, title: "tarea 3", isCompleted: false },
  { id: 4, title: "tarea 4", isCompleted: true },
  { id: 5, title: "tarea 5", isCompleted: false },
];

const getAllTasks = (req, res) => {
  res.json({ tasks });
};

const addTasks = (req, res) => {
  let { title } = req.body;
  if (!title) {
    return res
      .status(400)
      .json({ err: true, message: "El título es requerido" });
  } else if (tasks.find((task) => task.title === title)) {
    return res.status(400).json({ err: true, message: "El título ya existe" });
  } else {
    let newTask = {
      id: tasks.length + 1,
      title,
      isCompleted: false,
    };
    tasks.push(newTask);
    res.json({ err: false, message: "Tarea agregada correctamente" });
  }
};

const getTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  } else {
    res.json({ task: tasks[taskIndex] });
  }
};

const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  } else {
    tasks[taskIndex].title = req.body.title;
    res.json({ err: false, message: "Tarea editada correctamente" });
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.isCompleted = true;
    res.json({ err: false, message: "Tarea completada correctamente" });
  } else {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  }
};

const unclompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.isCompleted = false;
    res.json({ err: false, message: "Tarea no completada" });
  } else {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  }
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);

  let taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  } else {
    tasks.splice(taskIndex, 1);
    res.json({ err: false, message: "Tarea eliminada correctamente" });
  }
};

export default {
  getAllTasks,
  addTasks,
  getTask,
  editTask,
  completeTask,
  unclompleteTask,
  deleteTask,
};
