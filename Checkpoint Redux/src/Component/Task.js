import { useSelector } from "react-redux";

const Task = () => {
  const tasks = useSelector((state) => state.todo);
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>React Redux ToDo List</h1>
      <p>
        Tasks to do: <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default Task;
