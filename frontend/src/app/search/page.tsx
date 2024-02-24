'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Dropdown } from 'react-bootstrap';
import DatePicker from '../../components/common/dateRangePicker';
import DropdownInput from '../../components/common/dropdown';
import PriceRangeInput from '../../components/common/priceRangeInput';
import MapComponent from '../../components/common/map';
import SearchResultCard from '../../components/common/userCard';

const SearchPage: React.FC = () => {
  // State for search query and search results
  const [location, setLocation] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([{}]); // Adjust type according to your search result structure

  // Function to handle search
  const handleSearch = () => {
    // Implement your search logic here
    // Example: Fetch search results from API based on the query
    // For now, let's assume searchResults is an array of objects
    const dummySearchResults = [
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
      { id: 3, name: 'Result 3' },
    ];
    setSearchResults(dummySearchResults);
  };

  return (
    <main style={{ height: 1000 }}>
      <Container fluid>
        <Row>
          {/* Left column with search controls */}
          <Col md={2}>
            <Form onSubmit={handleSearch}>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Services</Form.Label>
                <DropdownInput text="Services" items={[{ value: 'test_1', text: 'test 1' }]} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Date</Form.Label>
                <DatePicker onDateChange={console.log} />
              </Form.Group>
              <hr />

              <PriceRangeInput onChange={console.log} />
            </Form>

            <hr />
          </Col>

          {/* Middle column with search results */}
          <Col md={6}>
            <h2>Search Results</h2>
            {searchResults.map((result, i) => (
              <SearchResultCard key={i} user={{}} />
            ))}
          </Col>

          {/* Right column with map */}
          <Col md={4}>
            <MapComponent />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SearchPage;
