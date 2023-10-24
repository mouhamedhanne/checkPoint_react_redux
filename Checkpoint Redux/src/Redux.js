import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      text: "Lire un livre",
      done: false,
    },
    { id: 2, text: "Faire du sport", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export { store };
