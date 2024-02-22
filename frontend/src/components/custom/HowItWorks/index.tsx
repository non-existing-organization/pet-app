'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TbDeviceIpadSearch } from 'react-icons/tb';
import { FiUserCheck } from 'react-icons/fi';
import { BsCreditCard2Back } from "react-icons/bs";

import styles from './component.module.css';

function HowItWorks() {
  return (
    <section className={`${styles['text-center']} ${styles['pos-r']}`}>
      <Container>
        <Row>
          <Col className="text-center">
            <div className={styles['section-title']}>
              <div className={styles['title-effect']}>
                <div className={styles['bar']}></div>
                <div className={styles['bar']}></div>
                <div className={styles['bar']}></div>
                <div className={styles['bar']}></div>
              </div>
              <h6 style={{color: 'grey'}}>How It Work</h6>
              <h3 className={styles['title']}>Discover and engage with reliable pet caregivers. It&apos;s as simple as counting to three!</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={12} className="text-center">
            <div className={styles['work-process']}>
              <div className={styles['box-loader']}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles['step-num-box']}>
                <div className={styles['step-icon']}>
                  <span>
                    <TbDeviceIpadSearch />
                  </span>
                </div>
                <div className={styles['step-num']}>01</div>
              </div>
              <div className={styles['step-desc']}>
                <h4>Discover a Trusted Pet Sitter</h4>
                <p className={styles['mb-0']}>Explore and connect with certified pet sitters in your area for reliable and experienced pet care services.</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} className="text-center">
            <div className={styles['work-process']}>
              <div className={styles['box-loader']}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles['step-num-box']}>
                <div className={styles['step-icon']}>
                  <span>
                    <FiUserCheck />
                  </span>
                </div>
                <div className={styles['step-num']}>02</div>
              </div>
              <div className={styles['step-desc']}>
                <h4>Schedule a Meet & Greet Session</h4>
                <p className={styles['mb-0']}>Schedule a meet & greet session to personally connect with your sitter, with no strings attached.</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} className="text-center">
            <div className={styles['work-process']}>
              <div className={styles['step-num-box']}>
                <div className={styles['step-icon']}>
                  <span>
                    <BsCreditCard2Back />
                  </span>
                </div>
                <div className={styles['step-num']}>03</div>
              </div>
              <div className={styles['step-desc']}>
                <h4>Secure Online Payments:</h4>
                <p className={styles['mb-0']}>Reserve Your Sitter with Our Safe Online Platform, Featuring Flexible Cancellation Options.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HowItWorks;

