'use client'
import React, { useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar
        onChange={onChange}
        value={date}
        className="text-blue-600 font-bold"
      />
    </div>
  );
};

export default MyCalendar;
