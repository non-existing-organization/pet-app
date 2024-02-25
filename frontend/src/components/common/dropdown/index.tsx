'use client';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import style from './component.module.scss';
import { useState } from 'react';

interface Props {
  text: string;
  items?: {
    value: string;
    text: string;
  }[];
  selectedKey?: (item) => void;
  style?:{[key: string]: string}
}

const DropdownInput = ({ text, items = [], selectedKey, style: toggleStyles }: Props) => {
  const [selected, setSelected] = useState<{ value: string; text: string }>();

  const handleSelect = (eventKey) => {
    const item = items.find(({ value }) => value === eventKey);
    setSelected(item);
    selectedKey?.(eventKey);
  };
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle  variant="light" id="services-dropdown" className={style['dropdown__input']}  style={toggleStyles} >
        {selected?.text ?? text}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{width: '100%'}}>
        {items.map((item, i) => (
          <Dropdown.Item key={i} defaultValue={item.value} eventKey={item.value}>
            {item.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownInput;
