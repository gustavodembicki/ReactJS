import './global.css';
import styles from './App.module.css';
import toDoLogo from './assets/todo-list-logo.svg';
import { TasksType } from "./@types/types";
import { ChangeEvent, FormEvent, useState } from "react";
import { Tasks } from './components/Tasks';
import { NewTask } from './components/NewTask';

export function App() {
  const [uniqueId, setUniqueId] = useState<number>(1);
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [tasksConcluded, setTasksConcluded] = useState<number>(0);

  function addTask (event: FormEvent) {
    event.preventDefault();

    let taskToAdd: TasksType = {
      id: uniqueId,
      content: newTask,
      isChecked: false
    }

    setTasks([...tasks, taskToAdd])
    setUniqueId(uniqueId + 1);
    setNewTask("");
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function checkTask(id?: number, checked?: boolean) {
    let totalConcludedTasks = 0;
    const tasksWithConcluded = tasks.map((task) => {
      if (id && typeof checked != "undefined") {
        if (task.id == id) {
          task.isChecked = checked;
        }
      }

      if (task.isChecked) {
        totalConcludedTasks++;
      }

      return task;
    });

    setTasks(tasksWithConcluded);
    setTasksConcluded(totalConcludedTasks);
  }

  function deleteTask(id: number) {
    const tasksWithoutDeleted = tasks.filter((task) => {
      if (task.id != id) {
        return task;
      } else {
        if (task.isChecked && tasksConcluded > 0) {
          setTasksConcluded(tasksConcluded - 1);
        }
      }
    });

    setTasks(tasksWithoutDeleted);
  }

  return (
    <div>
      <header className={styles.header}>
          <img src={toDoLogo} alt="Logo to-do list" />
      </header>

      <div>
        <NewTask addTask={addTask} handleNewTask={handleNewTask} newTask={newTask} />
        <Tasks tasks={tasks} tasksCount={tasks.length} tasksConcluded={tasksConcluded} checkTask={checkTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}
