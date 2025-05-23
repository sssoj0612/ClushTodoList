import styled from 'styled-components'

const EditorStyle = styled.div`

.inputInsert {
    flex: 1;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #c4c4c4;
    border-radius: 0.4rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.inputInsert:focus,
.inputInsert.ant-input-focused {
    border-color: #c4c4c4 !important;
    box-shadow: 0 0 0 0.2rem rgb(221, 240, 234);
    outline: none !important;
}

.btnInsert {
    cursor: pointer;
    width: 70px;
    height: 40px;
    border: none;
    background-color: ${(props) => props.color ? '#000' : '#A7D7C9' };
    /* background-color: #A7D7C9; */
    border-radius: 0.4rem;
    color: white;
    font-size: larger;
}

.btnInsert:hover {
    background-color: #A7D7C9 !important;
    color: white !important;
    border: none !important;
    box-shadow: none !important;
}

.btnInsert:active {
    background-color: #8bb3a7 !important;
}
`

export default EditorStyle;