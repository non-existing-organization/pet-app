import React from 'react';
import { Metadata } from 'next';
import MainPageSearchForm from '../components/custom/mainPageSearch';
import HowItWorks from '../components/custom/HowItWorks';
import VerificationInfo from '../components/custom/verification';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {

  return (
    <main>
      <div>
        <main>
          <div className={styles['home-page__search_container']}>
            <div className={styles['home-page__search_container__content']}>
              <h2>Where Every Paw Finds a Home Away from Home!</h2>
              <h4 className='mt-5'>Pampering Pets with Love, Just Like Family!</h4>
              <br/>
              <MainPageSearchForm />
            </div>
          </div>
          <div style={{ width: '100%', background: '#F9F9F9', paddingTop: '70px', paddingBottom: '70px' }}>
            <HowItWorks />
          </div>

          <div style={{ width: '100%', background: '#E8E8E8', paddingTop: '70px', paddingBottom: '70px' }}>
            <VerificationInfo />
          </div>
        </main>
      </div>
    </main>
  );
}
