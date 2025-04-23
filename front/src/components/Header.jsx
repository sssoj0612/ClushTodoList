import { Button, Typography, Space } from "antd";
import { CalendarOutlined, ReloadOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import "./Header.css";

// Typography 컴포넌트에서 타이틀과 텍스트만 추출
const { Title, Text } = Typography;

// Header 컴포넌트 정의 (날짜 선택 및 전체 투두 보기 기능)
const Header = ({onSearchByDate, onResetTodos}) => {

  const datePickerRef = useRef(); // DatePicker를 직접 열기 위한 참조
  const [selectedDate, setSelectedDate] = useState(new Date()); // 현재 선택된 날짜 저장

  // 달력
  const openDatePicker = () => {
    datePickerRef.current.setOpen(true);
  };

  // 날짜 선택
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // 날짜를 YYYY-MM-DD 형태로 변환해서 요청
    const formatted = dayjs(date).format("YYYY-MM-DD");
    onSearchByDate(formatted);
  };

  // UI
  return (
    <div className="headerContainer">
      <h3>오늘은 📆</h3>
      <Title level={2} className="headerTitle">
        {selectedDate.toDateString()}
      </Title>

      <Space>
        <Button
          type="text"
          className="btnSelect"
          icon={<CalendarOutlined />}
          onClick={openDatePicker}
        >
          날짜 선택
        </Button>
        <Button
          type="text"
          className="btnSelect"
          icon={<ReloadOutlined />}
          onClick={onResetTodos}
        >
          전체 투두 보기
        </Button>
      </Space>

      <DatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        customInput={<div />}
      />
    </div>
  );
};

export default Header;