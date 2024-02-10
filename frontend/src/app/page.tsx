import Image from 'next/image';
import styles from './page.module.scss';
import Head from 'next/head';
import Nav from '../components/layout/nav';
import Footer from '../components/layout/footer';

export default function Home() {
  return (
    <main>
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <main>
          <div className={styles['dog-image-container']}>
            {/* Background image of dog puppy */}
            <div className={styles['search-form']}>
              <form>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" />
                <label htmlFor="service">Service:</label>
                <select id="service" name="service">
                  <option value="grooming">Grooming</option>
                  <option value="boarding">Boarding</option>
                  <option value="training">Training</option>
                </select>
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
