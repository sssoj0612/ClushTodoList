import { useState, useRef } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {

    const { todoSeq, contents, regDt, status } = todo;
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

    return (
        <div className={`TodoItem ${status ? "done" : ""}`}>
            <label className="checkbox-container">
                <input type ="checkbox" checked = {status} onChange = {() => onToggle(todo)}/>
                <span className = "checkmark"></span>
            </label>

            {/* 수정 모드 */}
            {isEdit ? (
                <input
                    ref = {inputRef}
                    value = {editValue}
                    onChange = {(e) => setEditValue(e.target.value)}
                    onBlur = {handleBlur}
                    onKeyDown = {handleKeyDown}
                    className = "editInput"
                />
            ) : (
                <div className ="contents" onClick = {handleDoubleClick}>
                {contents}
                </div>
            )}

            <div className ="date">{regDt}</div>
            <button onClick = {() => onDelete(todoSeq)}>삭제</button>
        </div>
    );
};

export default TodoItem;