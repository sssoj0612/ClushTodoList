import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import axios from "axios";

const API = "http://localhost:11000/api/todo";

function App() {
  const [todos, setTodos] = useState([]);
  
  // 처음 마운트될 때 전체 리스트 불러오기
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API}/list`);
      setTodos(res.data);
    } catch (err) {
      console.error("불러오기 실패!!", err);
    }
  };

  // ✅ 등록
  const onCreate = async (contents) => {
    try {
      await axios.post(`${API}/insert`, {
        contents: contents,
      });
      fetchTodos(); // 다시 목록 갱신
    } catch (err) {
      console.error("등록 실패!!", err);
    }
  };

  // ✅ 삭제
  const onDelete = async (todoSeq) => {
    try {
      await axios.delete(`${API}/delete/${todoSeq}`);
      fetchTodos();
    } catch (err) {
      console.error("삭제 실패!!", err);
    }
  };

  // ✅ 체크박스 상태 변경
  const onToggle = async (todo) => {
    try {
      await axios.put(`${API}/update`, {
        todoSeq: todo.todoSeq,
        contents: todo.contents,
        status: !todo.status,
      });
      fetchTodos();
    } catch (err) {
      console.error("체크박스 수정 실패!!", err);
    }
  };

  // ✅ 검색
  const onSearch = async (keyword) => {
  try {
    const res = await axios.get(`${API}/list`, {
      params: { search: keyword },
    });
    setTodos(res.data);
  } catch (err) {
    console.error("검색 실패!!", err);
  }
};

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onToggle={onToggle} onSearch={onSearch} />
    </div>
  );
}

export default App;