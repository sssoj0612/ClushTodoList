import "./Header.css";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

const Header = ({onSearchByDate, onResetTodos}) => {

  const datePickerRef = useRef();
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{selectedDate.toDateString()}</h1>

      <button className = "btnSelect" onClick = {openDatePicker}>📅 날짜 선택</button>
      <button className = "btnSelect" onClick = {onResetTodos}>🔁 전체 투두 보기</button>

      <DatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={handleDateChange}
        className="hidden-datepicker"
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
};

export default Header;