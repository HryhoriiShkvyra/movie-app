import React from "react";
import "./Calendar.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

export default function VCalendar() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    console.log(date);
  }, [date]);

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // if (month.find((item) => item === date.slice(5, 9))) {
  //   console.log(true);
  // }

  return (
    <div>
      <Calendar onChange={setDate} value={date} />
      <div className="text-center">Selected Date: {date.toDateString()}</div>
    </div>
  );
}
