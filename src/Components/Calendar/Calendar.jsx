import React from "react";
import "./Calendar.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

export default function VCalendar() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Calendar onChange={setDate} value={date} />
      <div className="text-center">Selected Date: {date.toDateString()}</div>
    </div>
  );
}
