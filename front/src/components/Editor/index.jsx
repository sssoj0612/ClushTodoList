import { useRef, useState } from "react";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EditorStyle from './Styled';

// Editor 컴포넌트 정의 (할 일 추가 기능)
const Editor = ({ onCreate }) => {
  const [color , setColor] = useState(false)
  const [content, setContent] = useState(""); // 내용 입력하는 변수
  const inputRef = useRef(); // 입력창

  // 내용 바뀔 때마다 상태값 업데이트
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // 엔터 누르면 제출
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClick = () => {
    setColor(true);
  }

  // 등록
  const handleSubmit = () => {
    if (content.trim() === "") { // 아무것도 입력 안 했으면
      inputRef.current.focus(); // 입력창에 포커스스
      return;
    }
    onCreate(content); // 상위 컴포넌트로 입력값 전달 (Todo 생성)
    setContent(""); // 입력창 초기화화
  };

  // UI
  return (

    <EditorStyle color={color} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <Input
        className="inputInsert"
        ref = {inputRef} // 입력창 DOM에 접근할 수 있게 연결
        value = {content} // 현재 입력된 값 바인딩
        onChange = {handleChange} // 입력 값 변경시 함수 호출
        onKeyDown = {handleKeyDown} // 키 누를 때 함수 호출
        placeholder = "새로운 Todo 추가하기..." // 입력창 텍스트
      />
      <Button
        className="btnInsert"
        icon = {<PlusOutlined />} // + 아이콘
        size = "larger" // 버튼 크기
        onClick = {handleSubmit} // 버튼 클릭시 함수 호출
      />
      {/* <button onClick={handleClick}></button> */}
    </EditorStyle>
  );
};

export default Editor;