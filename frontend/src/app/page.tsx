import { Metadata } from 'next';
import Head from 'next/head';
import styles from './page.module.scss';
import MainPageSearchForm from '../components/custom/mainPageSearch';
import HowItWorks from '../components/custom/HowItWorks';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main>
      <div>
        <main>
          <div className={styles['home-page__search_container']}>
            {/* Background image of dog puppy */}
            <div className={styles['home-page__search_container__search-form']}>
              <form>
                <MainPageSearchForm />
              </form>
            </div>
          </div>
          <div style={{ width: '100%', background: '#F9F9F9', paddingTop: '70px' }}>
            <HowItWorks />
          </div>
        </main>
      </div>
    </main>
  );
}
