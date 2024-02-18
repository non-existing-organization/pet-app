'use client';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePicker = ({ onDateChange }) => {
  const [dateRange, setDateRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const handleDateFieldClick = () => {
    setShowDatePicker(!showDatePicker); // Toggle the state to show/hide the date picker
  };

  const handleDateSelect = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  useEffect(() => {
    onDateChange([dateRange]);
  }, [dateRange, onDateChange]);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    // Check if the click occurs outside the date picker and the input field
    if (!target.closest('.date-range-picker') && !target.closest('.date-input')) {
      setShowDatePicker(false);
    }
  };

  // Attach event listener for clicks outside the date picker and input field
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  return (
    <div className="position-relative">
      <div className="date-input" onClick={handleDateFieldClick}>
        <Form.Control
          type="text"
          placeholder="Enter Location"
          value={`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()} `}
        />
      </div>
      {showDatePicker && (
        <div className="date-range-picker" style={{ position: 'absolute', top: '40px', zIndex: 1000 }}>
          <DateRangePicker
            ranges={dateRange}
            onChange={handleDateSelect}
            showSelectionPreview={true}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
