import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";
import chalk from "chalk";

const tasks = [];
const DB_FILE = "tasks.txt";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.red.bold("Bienvenido a ToDoCLI"));
  console.log(chalk.yellow("1. Listar tareas"));
  console.log(chalk.yellow("2. Añadir tarea"));
  console.log(chalk.yellow("3. Marcar tarea como completada"));
  console.log(chalk.yellow("4. Borrar tarea"));
  console.log(chalk.yellow("5. Salir"));
  console.log("\n");
}

function loadTasks() {
  try {
    const data = readFileSync(DB_FILE, "utf-8");
    const line = data.split("\n");
    tasks.length = 0;
    line.forEach((line) => {
      if (line.trim() !== "") {
        const [task, completed] = line.split(",");
        tasks.push({ task, completed: completed === "true" });
      }
    });
    console.log(chalk.green("Tareas cargadas"));
  } catch (error) {
    console.log(chalk.red("No se han podido cargar las tareas"));
    return [];
  }
}

function saveTasks() {
  const data = tasks.map((task) => `${task.task},${task.completed}`).join("\n");
  writeFileSync(DB_FILE, data, "utf-8");
  console.log(chalk.green("Tareas guardadas"));
}

function listTasks() {
  if (tasks.length === 0) {
    console.log(chalk.green("No hay tareas"));
  } else {
    console.log(chalk.green("*************Tareas***********"));
    tasks.forEach((task, index) => {
      let status = task.completed ? "✅" : "❌";
      console.log(chalk.blueBright(`${index + 1}. ${status} - ${task.task}`));
    });
  }
  displayMenu();
  chooseOption();
}

function addTask() {
  rl.question("Introduce la tarea: ", (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea añadida"));
    saveTasks();
    displayMenu();
    chooseOption();
  });
}

function completeTask() {
  rl.question("Introduce el número de la tarea completada: ", (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      saveTasks();
      console.log(chalk.green("Tarea completada"));
    } else {
      console.log(chalk.red("Tarea no encontrada"));
    }
    displayMenu();
    chooseOption();
  });
}

function deleteTask() {
  rl.question("Introduce el número de la tarea a borrar: ", (index) => {
    if (tasks[index - 1]) {
      tasks.splice(index - 1, 1);
      console.log(chalk.green("Tarea borrada"));
    } else {
      console.log(chalk.red("Tarea no encontrada"));
    }
    displayMenu();
    chooseOption();
  });
}

function chooseOption() {
  rl.question("Elige una opción: ", (option) => {
    switch (option) {
      case "1":
        listTasks();
        break;
      case "2":
        addTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        deleteTask();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log(chalk.red("Opción no válida"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}

loadTasks();
chooseOption();
displayMenu();
