'use client';
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
}

const DropdownInput = ({ text, items = [], selectedKey }: Props) => {
  const [selected, setSelected] = useState<{ value: string; text: string }>(null);

  const handleSelect = (eventKey) => {
    const item = items.find(({ value }) => value === eventKey);
    setSelected(item);
    selectedKey?.(eventKey);
  };
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="light" id="services-dropdown" className={style['dropdown__input']}>
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
