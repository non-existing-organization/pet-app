import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { FaDog, FaCat, FaDove, FaOtter, FaFish } from 'react-icons/fa';
import { GiRabbit } from "react-icons/gi";


const AnimalPicker = () => {
  const [petTypes, setPetTypes] = useState({
    dog: { selected: false, size: '', quantity: 0 },
    cat: { selected: false, size: '', quantity: 0 },
    bird: { selected: false, size: '', quantity: 0 },
    rabbit: { selected: false, size: '', quantity: 0 },
    ferret: { selected: false, size: '', quantity: 0 },
    fish: { selected: false, size: '', quantity: 0 },
    other: { selected: false, type: '', quantity: 0 },
  });

  const handleCheckboxChange = (petType) => {
    setPetTypes((prevTypes) => ({
      ...prevTypes,
      [petType]: { ...prevTypes[petType], selected: !prevTypes[petType].selected },
    }));
  };

  const handleSizeChange = (petType, size) => {
    setPetTypes((prevTypes) => ({
      ...prevTypes,
      [petType]: { ...prevTypes[petType], size },
    }));
  };

  const handleQuantityChange = (petType, quantity) => {
    setPetTypes((prevTypes) => ({
      ...prevTypes,
      [petType]: { ...prevTypes[petType], quantity: parseInt(quantity, 10) || 0 },
    }));
  };

  const handleOtherTypeChange = (type) => {
    setPetTypes((prevTypes) => ({
      ...prevTypes,
      other: { ...prevTypes.other, type },
    }));
  };

  return (
    <Form className="pet-selection-form">
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Select Pets:
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="checkbox"
            label={<><FaDog /> Dog</>}
            id="dog"
            checked={petTypes.dog.selected}
            onChange={() => handleCheckboxChange('dog')}
          />
          {petTypes.dog.selected && (
            <>
              <Form.Control
                as="select"
                value={petTypes.dog.size}
                onChange={(e) => handleSizeChange('dog', e.target.value)}
              >
                <option value="">Select size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </Form.Control>
              <Form.Control
                type="number"
                value={petTypes.dog.quantity}
                onChange={(e) => handleQuantityChange('dog', e.target.value)}
                placeholder="Quantity"
                min="0"
                className="mt-2"
              />
            </>
          )}

          {/* Repeat Form.Check and Form.Control for other pet types */}

          <Form.Check
            type="checkbox"
            label="Other"
            id="other"
            checked={petTypes.other.selected}
            onChange={() => handleCheckboxChange('other')}
            className="mt-3"
          />
          {petTypes.other.selected && (
            <>
              <Form.Control
                type="text"
                value={petTypes.other.type}
                onChange={(e) => handleOtherTypeChange(e.target.value)}
                placeholder="Enter type"
                className="mb-2"
              />
              <Form.Control
                type="number"
                value={petTypes.other.quantity}
                onChange={(e) => handleQuantityChange('other', e.target.value)}
                placeholder="Quantity"
                min="0"
                className="mb-2"
              />
            </>
          )}
        </Col>
      </Form.Group>
    </Form>
  );
};

export default AnimalPicker;