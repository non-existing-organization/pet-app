"use client"
import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function MainPageSearchForm() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: "10vh" }}>
        <Col md={6}>
          <Form.Group controlId="services">
            <Form.Label>Select Services</Form.Label>
            <Form.Control as="select">
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center" style={{ height: "10vh" }}>
        <Col md={6}>
          <Form.Group controlId="date">
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>
        <Col md={6} className='justify-content-center align-items-center' style={{paddingTop: '32px', textAlign: 'center',}}>
          <Button variant="success" type="submit" style={{width: '100%'}} >
            <FaSearch/> Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPageSearchForm;