import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './component.module.css'; // Import CSS file for styling
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col>
            <Image alt='dog' src="/images/pet-white-clip.png" width={150} className={styles['cute-animal']} />
          </Col>
          <Col>
            <div className={styles['footer-section']}>
              <h5>Pages</h5>
              <ul className={styles['footer-links']}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/become-sitter">Become a Sitter</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="/help">Help</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={styles['footer-section']}>
              <h5>Find us on</h5>
              <ul className={styles['social-links']}>
                <li>
                  <a href="https://facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com">Twitter</a>
                </li>
                <li>
                  <a href="https://instagram.com">Instagram</a>
                </li>
                <li>
                  <a href="https://pinterest.com">Pinterest</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={styles['footer-section']}>
              <h5>Payment</h5>
              <ul className={styles['payment-types']}>
                <li>Stripe</li>
                {/* Add more payment types as needed */}
              </ul>
            </div>
          </Col>
          <Col>
            <Image alt='cat' src="/images/cat.png" width={150} className={styles['cute-animal']} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <p className={styles['footer-bottom']}>
              © 2024 Your Website. All Rights Reserved. <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
