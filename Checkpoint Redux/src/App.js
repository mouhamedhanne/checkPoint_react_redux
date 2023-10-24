import "./App.css";
import Task from "./Component/Task";
import ListTask from "./Component/ListTask";
import TaskForm from "./Component/TaskForm";
import { Provider } from "react-redux";
import { store } from "./Redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <article>
          <Task />
          <ListTask />
        </article>
        <footer>
          <TaskForm />
        </footer>
      </div>
    </Provider>
  );
}

export default App;
