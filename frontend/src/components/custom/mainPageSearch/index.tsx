'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import styles from './component.module.scss';
import DropdownInput from '../../common/dropdown';
import DatePicker from '../../common/dateRangePicker';

const staticArray = [
  { text: 'Lorem', value: 'lorem123' },
  { text: 'Ipsum', value: 'ipsum456' },
  { text: 'Dolor', value: 'dolor789' },
  { text: 'Sit', value: 'sit123' },
  { text: 'Amet', value: 'amet456' },
];

interface MatchedSubstring {
  length: number;
  offset: number;
}

interface StructuredFormatting {
  main_text: string;
  secondary_text: string;
}

interface MappedStructuredFormatting {
  main_text: string;
  secondary_text: string;
  placeId: string;
}

interface Term {
  offset: number;
  value: string;
}

interface Prediction {
  description: string;
  matched_substrings: MatchedSubstring[];
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
  terms: Term[];
  types: string[];
}

interface ApiResponse {
  predictions: Prediction[];
}

interface Props {
  onSubmit: (data) => void;
}

function MainPageSearchForm({ onSubmit }: Props) {
  const [items, setItems] = useState<{ text: string; value: string }[]>([]);
  const [selectedService, setSelectedService] = useState<string>(null);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<MappedStructuredFormatting[]>([]);
  const [locationId, setSelectedSuggestion] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    // Your logic to fetch suggestions based on inputValue
    // For example, fetching suggestions from an API
    fetchSuggestions(inputValue);
  };

  const handleSuggestionSelect = (suggestion: MappedStructuredFormatting) => {
    setValue(suggestion.main_text);
    setSelectedSuggestion(suggestion.placeId);
    // Clear suggestions once a suggestion is selected
    setSuggestions([]);
  };

  function handleSubmit(event) {
    event.preventDefault();

    // Access form data here
    const service = selectedService;
    const location = locationId;
    const date = event.target.date.value;

    onSubmit?.({service, location, date})
  }

  const fetchSuggestions = async (inputValue) => {
    try {
      const response = await axios.get(
        `https://api.pawshake.scalecity.space/place/autocomplete?countryCode=GB&query=${inputValue}&sessionToken=585ed234-2b43-4dd0-8ca9-5bec81065831`
      );
      const data = response.data?.proxyResult as ApiResponse;
      const locationsList = data.predictions.map((prediction) => ({ ...prediction.structured_formatting, placeId: prediction.place_id }));
      setSuggestions(locationsList);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  useEffect(() => {
    setItems(staticArray);
  }, []);

  return (
    <div className={styles['main_page_search__container']}>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <Form.Group controlId="service" style={{ position: 'relative' }}>
                <Form.Label>Select Service</Form.Label>
                <DropdownInput text="Services" items={items} selectedKey={setSelectedService} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="location" style={{ position: 'relative' }}>
                <Form.Label>Location</Form.Label>
                <FormControl type="text" value={value} onChange={handleChange} placeholder="Enter text" autoComplete="off" required />
                {suggestions.length > 0 && (
                  <ul className={`${styles['main_page_search__suggestions-list']}`}>
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionSelect(suggestion)}
                        className={styles['main_page_search__suggestions-list__item']}>
                        <span className={styles['main_page_search__suggestions-list__item__main-text']}>{suggestion.main_text}</span>
                        <span className={styles['main_page_search__suggestions-list__item__sub-text']}>{suggestion.secondary_text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <Form.Group controlId="date">
                <Form.Label>Select Date</Form.Label>
                <DatePicker />
              </Form.Group>
            </Col>
            <Col md={6} className="justify-content-center align-items-center" style={{ paddingTop: '32px', textAlign: 'center' }}>
              <Button variant="success" type="submit" style={{ width: '100%' }}>
                <FaSearch /> Search
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default MainPageSearchForm;
