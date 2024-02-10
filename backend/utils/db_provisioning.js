const { Pool } = require('pg');
require('dotenv').config();

// Ensure necessary environment variables are set
const requiredEnv = ['DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_PORT', 'DB_NAME'];
requiredEnv.forEach((env) => {
  if (!process.env[env]) {
    console.error(`Fatal Error: ${env} is not set in the environment variables.`);
    process.exit(1); // Exit the process with an error code
  }
});

const dbDetails = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

const pool = new Pool(dbDetails);

// Improved logging (avoid logging sensitive details)
console.log("Successfully connected to the database.");

const provision = async (sql) => {
  const client = await pool.connect();
  try {
    await client.query(sql);
    console.log("Query executed successfully.");
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    client.release(); // Ensure the client is released in case of success or failure
  }
};



const sqlStatement1 = `
CREATE TABLE IF NOT EXISTS booking_services (
    id SERIAL PRIMARY KEY,
    type_of_service VARCHAR(255) NOT NULL,
    service_name VARCHAR(255) NOT NULL,
    service_description TEXT NOT NULL,
    duration VARCHAR(100),
    target_pet VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
`;

const sqlStatement2 = `
INSERT INTO booking_services (type_of_service, service_name, service_description, duration, target_pet)
VALUES
    ('Pet Sitting', 'Basic Pet Sitting', 'Basic pet sitting service for up to 2 hours per session.', '2 hours', 'Any'),
    ('Pet Walking', 'Daily Pet Walking', '30-minute walking service to keep your pet healthy and active.', '30 minutes', 'Dogs'),
    ('Pet Grooming', 'Full Grooming Session', 'Complete grooming service including bath, hair cut, and nail trimming.', '1 hour', 'Dogs, Cats');
`;


//  create an array with all the SQL statements to execute
const sqlStatements = [sqlStatement1, sqlStatement2];

// Execute all SQL statements
(async () => {
  try {
    for (let sql of sqlStatements) {
      await provision(sql);
    }
    console.log("Provisioning script completed.");
  } catch (err) {
    console.error("Error in provision function", err);
  } finally {
    await pool.end(); // Close the pool here, once all statements are executed
    console.log("Pool has been closed.");
  }
})();

