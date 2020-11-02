import { useState } from "react";
import "./App.css";
import TodoList from "./components/ListAndRemove";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "aaaaaaaaaaaaaaaaaaaaa" },
    { id: 2, title: "aaaaaaaaaaưqeqweaaaaaaaaaaa" },
    { id: 3, title: "aaaaaaaaaaaaaaqưewqeqweqweqweqwaaaaaaa" },
    { id: 4, title: "aaaaaaaaaaaaaaqưewqeqweqweqweqwaaaaaaa" },
    { id: 5, title: "aaaaaaaaaaaaaaqưewqeqweqweqweqwaaaaaaa" },
  ]);

  function handLeTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id); //findIndex nó sẽ trả về vị trí của phần tử được chỉ định và gán nó vào index
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1); // xóa 1 phần tử tại vị trí index
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <TodoList todos={todoList} onTodoClick={handLeTodoClick} />
      <TodoForm />
    </div>
  );
}

export default App;
