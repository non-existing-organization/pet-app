import Image from "next/image";
import styles from "./page.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <main className="main">
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={styles["dog-image-container"]}>
          {/* Background image of dog puppy */}
          <div className={styles["search-form"]}>
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
      <footer>
        {/* Footer content */}
        <p>Footer content goes here</p>
      </footer>
    </div>
    </main>
  );
}
