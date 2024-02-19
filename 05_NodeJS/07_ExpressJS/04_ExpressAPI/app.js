import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/taskController.js";
import errorController from "./controllers/errorController.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/tasks", taskController.getAllTasks);
app.post("/tasks", taskController.addTasks);
app.get("/tasks/:id", taskController.getTask);
app.put("/tasks/:id", taskController.editTask);
app.put("/tasks/complete/:id", taskController.completeTask);
app.put("/tasks/uncomplete/:id", taskController.unclompleteTask);
app.delete("/tasks/:id", taskController.deleteTask);

app.use(errorController.error404);

app.listen(port, () => {
  console.log(`La API esta corriendo en http://localhost:${port}/tasks`);
});
