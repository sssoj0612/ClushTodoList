import "./TodoItem.css";

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <input type="checkbox"/>
            <div className="contents">Todo...</div>
            <button>삭제</button>
        </div>
    );
};

export default TodoItem;