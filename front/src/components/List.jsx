import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onDelete, onToggle, onSearch, onUpdate }) => {

  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" value={search} onChange={handleChange} onKeyDown={handleKeyDown} />
      <div className="todos_wrapper">
        {todos.map((todo) => (
          <TodoItem
            key={todo.todoSeq}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default List;