import { FC, useState } from "react";
import { AddNewTodo } from "./components/AddNewTodo/AddNewTodo";
import { ActiveTodos } from "./components/ActiveTodos/Activetodos";
import "./sass/main.scss";

type TodoType = {
  name: string;
  surname: string;
  email: string;
  function: string;
  msg: string;
};

export const App: FC = () => {
  const [activeTodosList, setActiveTodosList] = useState<TodoType[]>([]);

  const addTodoHandler: (x: TodoType) => void = (todoObject) => {
    setActiveTodosList((): TodoType[] => [...activeTodosList, todoObject]);
  };

  return (
    <div className="App">
      <AddNewTodo addTodoHandler={addTodoHandler} />
      <main>
        <ActiveTodos activeTodoList={activeTodosList} />
      </main>
    </div>
  );
};

export default App;
