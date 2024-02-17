import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiHome, FiUserPlus, FiMail, FiHelpCircle } from 'react-icons/fi';
import { FaStripe } from 'react-icons/fa';
import styles from  './component.module.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={2}>
            <img src="./images/pet-white-clip.png" width={100} alt="Cute Animal" className={styles['cute-animal']} />
          </Col>
          <Col md={7} className="text-left">
            <ul className={styles['footer-links']}>
              <li><a href="/">Home</a></li>
              <li><a href="/become-sitter">Become a Sitter</a></li>
              <li><a href="/signup">Sign Up</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </Col>
          <Col md={3} className="text-right">
            <p className={styles['footer-payment']}>Supported Payments: Stripe</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <p className={styles['footer-bottom']}>© 2024 Your Website. All Rights Reserved. <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;