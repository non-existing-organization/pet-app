'use client';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

interface Props {
  onChange: (object: any) => void;
}

const PriceRangeInput: React.FC<Props> = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const handleMinPriceChange = (value: number): void => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value: number): void => {
    setMaxPrice(value);
  };

  useEffect(() => {
    onChange({ minPrice, maxPrice });
  }, [onChange, minPrice, maxPrice]);

  return (
    <Form.Group>
      <Form.Label>Price (GBP) range</Form.Label>
      <div className="d-flex align-items-center">
        <RangeSlider
          value={minPrice}
          onChange={(elm) => handleMinPriceChange(Number(elm.target.value))}
          min={0}
          max={1000}
          step={10}
          className="mr-2"
        />
        <span>-</span>
        <RangeSlider
          value={maxPrice}
          onChange={(elm) => handleMaxPriceChange(Number(elm.target.value))}
          min={0}
          max={1000}
          step={10}
          className="ml-2"
        />
      </div>
    </Form.Group>
  );
};

export default PriceRangeInput;
