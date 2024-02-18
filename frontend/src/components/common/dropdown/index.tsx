'use client';

import { Dropdown } from 'react-bootstrap';

interface Props {
  text: string;
  items?: {
    value: string;
    text: string;
  }[];
}

const DropdownInput = ({ text, items = [] }: Props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="services-dropdown" style={{width: '100%'}}>
       {text}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, i) => (
          <Dropdown.Item key={i} defaultValue={item.value}>{item.text}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownInput;
