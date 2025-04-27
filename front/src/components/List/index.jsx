import { List as AntList, Input, Typography, Tag } from "antd";
import TodoItem from "../TodoItem";
import { useState, useEffect } from "react";
import axios from "axios";
import ListStyle from './Styled'

// 리스트 컴포넌트 정의
const List = ({ todos, onDelete, onToggle, onSearch, onUpdate }) => {

  // 검색어 상태 저장
  const [search, setSearch] = useState("");

  // 통계 상태
  const [statistics, setStatistics] = useState({ complete: 0, incomplete: 0 });

  // 엔터 누르거나 검색 트리거시 실행행
  const handleSearch = (value) => {
    onSearch(value);
  };

  // 통계
  useEffect(() => {
    axios.get("http://localhost:11000/api/todo/statistics")
      .then((res) => {
        setStatistics(res.data);
      })
      .catch((err) => {
        console.error("통계 불러오기 실패!!", err);
      });
  }, [todos]); // todos 바뀔 때마다 새로 불러옴

  // UI
  return (
    <ListStyle>
    <div className="List">
      <h3> 진행 상황 🌱
        <Tag color="green" style={{ marginLeft: 8 }}>✔️ 완료 {statistics.complete}</Tag>
        <Tag color="red">❗ 미완료 {statistics.incomplete}</Tag>
      </h3>

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
    </ListStyle>
  );
};

export default List;