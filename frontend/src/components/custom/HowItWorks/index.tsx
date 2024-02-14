'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearch, FaCalendar, FaCashRegister } from 'react-icons/fa';
import styles from './component.module.scss';

function HowItWorks() {
  return (
    <div>
      <div>
      <h2 className="text-center font-weight-bold">Here's how JOLLY works.</h2>
        <p className="text-center">Search and connect with trusted pet sitters. It's easy as 1, 2, 3.</p>
      </div>
      <Container className='pt-4' style={{ minHeight: '50vh' }}>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="text-centre" style={{ textAlign: 'center' }}>
              <div className={styles['blue-circle']}>
                <FaSearch className={styles['icon']} />
              </div>
              <h2>Find a verified pet sitter</h2>
              <p>Search and find experienced local pet sitters nearby</p>
            </div>
          </Col>
          <Col md={4} className="justify-content-center align-items-center">
            <div className="text-centre" style={{ textAlign: 'center' }}>
              <div className={styles['blue-circle']}>
                <FaCalendar className={styles['icon']} />
              </div>
              <h2>Arrange a meet & greet</h2>
              <p>Get to know your sitter in person, obligation-free.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-centre" style={{ textAlign: 'center' }}>
              <div className={styles['blue-circle']}>
                <FaCashRegister className={styles['icon']} />
              </div>
              <h2>Pay online</h2>
              <p>Book your sitter through our safe online system, with flexible cancellations in case your plans change.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWorks;
