import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../Redux";

const AddTask = (props) => {
  const { task } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}
        <button
          onClick={handleDelete}
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </button>
      </label>
    </div>
  );
};

export default AddTask;
