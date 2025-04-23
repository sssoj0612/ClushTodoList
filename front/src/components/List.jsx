import { List as AntList, Input, Typography } from "antd";
import TodoItem from "./TodoItem";
import { useState } from "react";
import "./List.css";

// 리스트 컴포넌트 정의
const List = ({ todos, onDelete, onToggle, onSearch, onUpdate }) => {

  // 검색어 상태 저장장
  const [search, setSearch] = useState("");

  // 엔터 누르거나 검색 트리거시 실행행
  const handleSearch = (value) => {
    onSearch(value);
  };

  // UI
  return (
    <div className="List">
      <h3>Todo List 🌱</h3>

      <Input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onPressEnter={() => handleSearch(search)}
        className="searchInput"
      />

      <AntList
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(todo) => (
          <TodoItem
            key={todo.todoSeq}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onUpdate={onUpdate}
          />
        )}
      />
    </div>
  );
};

export default List;