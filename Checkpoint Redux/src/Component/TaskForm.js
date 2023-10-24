import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask(text));

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
