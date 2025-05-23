import { Card } from "antd";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
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

  // ✅ 수정
  const onUpdate = async (todo) => {
    try {
      await axios.put(`${API}/update`, {
        todoSeq: todo.todoSeq,
        contents: todo.contents,
        status: todo.status,
      });
      fetchTodos();
    } catch (err) {
      console.error("수정 실패!!", err);
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
    <Card
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
      }}
    >
      <Header
        onSearchByDate={(dateStr) => {
          axios
            .get(`${API}/byDate`, { params: { date: dateStr } })
            .then((res) => setTodos(res.data));
        }}
        onResetTodos={fetchTodos}
      />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onDelete={onDelete}
        onToggle={onToggle}
        onSearch={onSearch}
        onUpdate={onUpdate}
      />
    </Card>
  );
}

export default App;