import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Value } from "react-calendar/dist/cjs/shared/types";

const CustomCalender: React.FC = () => {

  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const [selectDay, setSelectDay] = useState<number>(new Date().getDate());
  const [calendarText, setCalendarText] = useState<string>("");
  const [calendarYear, setCalendarYear] = useState<number>(new Date().getFullYear());
  const [calendarMonth, setCalendarMonth] = useState<String>(allMonthValues[new Date().getMonth()]);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  const handleDay = (value: Value) => {
    console.log("selectedDAte", value);
    setSelectedDate(value)
  }

  const handleMonthChange = (value: Date) => {
    const monthValue = allMonthValues[value.getMonth()];
  }
  useEffect(() => {
    setCalendarText(`Day: ${selectDay} , Month: ${calendarMonth}, Year: ${calendarYear}`);
    console.log("calendarText", calendarText);
  }, [selectDay, calendarMonth, calendarYear])
  return (
    <div>
      <Calendar
        onClickDay={(e) => setSelectDay(e.getDate())}
        onClickMonth={handleMonthChange}
        onClickYear={(e) => setCalendarYear(e.getFullYear())}
        onChange={handleDay}
        value={selectedDate}
      />
    </div>
  );
}

export default CustomCalender;