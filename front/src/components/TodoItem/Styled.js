import styled from 'styled-components'

const TodoItemStyle=styled.div`

.todoItemWrapper {
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: flex-start;
}

.todoCheckbox {
    margin-top: 4px;
    margin-right: 10px;
    flex-shrink: 0;
}

.todoContentAndButton {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.todoContentsWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.todoText {
    font-size: 16px;
    cursor: pointer;
}

.todoDate {
    font-size: 12px;
    color: #888;
    margin-top: 4px;
}

.todoDeleteButton {
    margin-left: 20px;
    margin-top: 5px;
}
`

export default TodoItemStyle;