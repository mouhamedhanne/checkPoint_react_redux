import { useSelector } from "react-redux";
import AddTask from "./AddTask";

const ListTask = () => {
  const tasks = useSelector((state) => state.todo);

  return (
    <>
      {tasks.map((t) => (
        <AddTask task={t} key={t.id} />
      ))}
    </>
  );
};

export default ListTask;
