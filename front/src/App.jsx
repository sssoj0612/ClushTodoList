import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
//import List from "./components/List";
import TodoItem from "./components/TodoItem";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  
  // 1. 처음 마운트될 때 전체 리스트트 불러오기
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:11000/api/todo/list");
    setTodos(res.data);
  };

  // 2. 등록
  const onCreate = async (contents) => {
    await axios.post("http://localhost:11000/api/todo/insert", {
      contents,
    });
    fetchTodos(); // 갱신!!!
  };

  // 3. 삭제
  const onDelete = async (todoSeq) => {
    await axios.delete(`http://localhost:11000/api/todo/delete/${todoSeq}`);
    fetchTodos();
  };

  // 4. 상태 변경
  const onToggle = async (todo) => {
    await axios.put("http://localhost:11000/api/todo/update", {
      ...todo,
      status: !todo.status,
    });
    fetchTodos();
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <div className="TodoList">
        {todos.map((todo) => (
          <TodoItem
            key={todo.todoSeq}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default App;