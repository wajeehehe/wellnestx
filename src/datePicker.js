/*import React, { useState, useEffect } from 'react';

function DateDropdown({ onSelectDate }) { // Pass onSelectDate prop from parent

  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    // ... (rest of the useEffect logic to calculate days)

    setDays(monthDays);
  }, [currentDate]); // Update on change of currentDate

  const handleChange = (event) => {
    const selectedDate = event.target.value;
    onSelectDate(selectedDate);
  };

  return (
    <select value={currentDate.toISOString().slice(0, 10)} onChange={handleChange}>
      {days.map((day) => (
        <option key={day.value} value={day.value} disabled={day.isDisabled}>
          {day.label}
        </option>
      ))}
    </select>
  );
}

export default DateDropdown;*/