'use client';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './component.module.scss';

function VerificationInfo() {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col md={5}>
          <Image src="/images/identity-verification.webp" />
        </Col>
        <Col>
          <Container className="mt-4">
            <div className={styles["bubble-background"]}>
              <div className="p-4">
                <h2 className="mb-4">Trust and Security Ensured:</h2>
                <h4 className="mb-4">Verified Pet Sitters with Yoti Identity Verification</h4>
                <p>
                  Rest easy knowing that our pet sitters are verified through Yoti identity verification, ensuring a trustworthy and secure experience
                  for pet owners. With Yoti, our caregivers undergo a rigorous identity verification process, providing peace of mind to pet owners
                  seeking reliable care for their beloved companions.
                </p>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default VerificationInfo;
