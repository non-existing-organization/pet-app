'use client';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { DayPicker } from 'react-day-picker';

interface Props {
  onDateChange?: (items) => void;
  style?: { [key: string]: string };
}

function formatDateRange(dates: Date[] | { from: Date; to: Date }) {
  if (typeof dates === 'object' && !Array.isArray(dates)) {
    return `${dates.from.toLocaleDateString()} - ${dates?.to?.toLocaleDateString() ?? ''}`;
  }

  if (Array.isArray(dates)) {
    if (!dates || dates.length === 0) {
      return '';
    }

    // Find earliest and latest dates
    const sortedDates = dates.slice().sort((a, b) => a.getTime() - b.getTime());
    const earliestDate = sortedDates[0];
    const latestDate = sortedDates[sortedDates.length - 1];

    // Format dates
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });
    const formattedStartDate = formatter.format(earliestDate);
    const formattedEndDate = formatter.format(latestDate);

    return `${dates.length} days between ${formattedStartDate} - ${formattedEndDate}`;
  }

  return '';
}


function mapSelectedDates(dates: Date[] | { from: Date; to: Date }) {
  if (typeof dates === 'object' && !Array.isArray(dates)) {
    const datesValues = Object.values(dates);
    return {
      dates: datesValues ?? [],
      type: 'range' 
    }
  }

  if (Array.isArray(dates)) {
    return {
      dates: dates ?? [],
      type: 'multiple' 
    }
  }

  return {
    dates: [],
    type: 'invalid'
  };
}

const DatePicker = ({ onDateChange, style }: Props) => {
  const [selected, setSelected] = useState<any>();

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isSingleMode, setIsSingleMode] = useState(true);

  const handleDateFieldClick = () => {
    setShowDatePicker(!showDatePicker); // Toggle the state to show/hide the date picker
  };

  const handleDateSelect = (date) => {
    setSelected(date);
    onDateChange?.(mapSelectedDates(date))
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    // Check if the click occurs outside the date picker and the input field
    if (!target.closest('.date-range-picker') && !target.closest('.date-input') && !target.closest('.picker-footer')) {
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

  const handleSwitchChange = () => {
    setIsSingleMode(!isSingleMode);
    setSelected([]);
  };

  const footer = () => (
    <div className="picker-footer">
      <Form.Check
        type="switch"
        id="selectionModeSwitch"
        label={isSingleMode ? 'Single Mode' : 'Range Mode'}
        checked={isSingleMode}
        onChange={handleSwitchChange}
      />
    </div>
  );

  return (
    <div className="position-relative">
      <div className="date-input" onClick={handleDateFieldClick}>
        <Form.Control type="text" placeholder="Selected Dates" value={formatDateRange(selected)} style={style} autoComplete='off' />
      </div>
      {showDatePicker && (
        <div
          className="date-range-picker"
          style={{ position: 'absolute', top: '40px', zIndex: 1000, border: '1px solid #dee2e6', background: 'white' }}>
          <DayPicker mode={isSingleMode ? 'multiple' : 'range'} required onSelect={handleDateSelect} footer={footer()} selected={selected} />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
