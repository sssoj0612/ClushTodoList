import "./TodoItem.css";

const TodoItem = ({ todo, onDelete, onToggle }) => {

    const { todoSeq, contents, regDt, status } = todo;

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={status} onChange={() => onToggle(todo)}/>
            <div className="contents">{contents}</div>
            <div className="date">{regDt}</div>
            <button onClick={() => onDelete(todoSeq)}>삭제</button>
        </div>
    );
};

export default TodoItem;