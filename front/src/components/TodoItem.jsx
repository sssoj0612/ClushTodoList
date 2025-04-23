import { Checkbox, Typography, Button, Input, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {

    const {todoSeq, contents, regDt, status} = todo;
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState(contents);
    const inputRef = useRef();

    const handleDoubleClick = () => {
        setIsEdit(true);
        setTimeout(() => inputRef.current?.focus(), 0); // 자동 포커스
    };

    const handleBlur = () => {
        if (editValue.trim() === "") return;
        if (editValue !== contents) {
            onUpdate({ ...todo, contents: editValue }); // 수정 요청
        }
        setIsEdit(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            inputRef.current.blur(); // blur로 저장 트리거
        }
    };

    // UI
    return (
    <Space className="todoItemWrapper">
      {/* 체크박스 */}
      <Checkbox
        checked={status}
        onChange={() => onToggle(todo)}
        className="todoCheckbox"
      />

      {/* 내용+날짜 / 수정 */}
      <div className="todoContentAndButton">
        <div className="todoContentsWrapper">
          {isEdit ? (
            <Input
              ref={inputRef}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <Typography.Text
              onClick={handleDoubleClick}
              delete={status}
              className="todoText"
            >
              {contents}
            </Typography.Text>
          )}
          <div className="todoDate">{regDt}</div>
        </div>

        {/* 삭제 버튼 */}
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => onDelete(todoSeq)}
          className="todoDeleteButton"
        >
          삭제
        </Button>
      </div>
    </Space>
  );
};

export default TodoItem;