const { Pool } = require('pg')
require('dotenv').config()

// Ensure necessary environment variables are set
const requiredEnv = ['DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_PORT', 'DB_NAME']
requiredEnv.forEach((env) => {
  if (!process.env[env]) {
    console.error(`Fatal Error: ${env} is not set in the environment variables.`)
    process.exit(1) // Exit the process with an error code
  }
})

const dbDetails = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
}

const pool = new Pool(dbDetails)

// Improved logging (avoid logging sensitive details)
console.log('Successfully connected to the database.')

const provision = async (sql) => {
  const client = await pool.connect()
  try {
    await client.query(sql)
    console.log('Query executed successfully.')
  } catch (err) {
    console.error('Error executing query', err.stack)
  } finally {
    client.release() // Ensure the client is released in case of success or failure
  }
}

const provisionBookingServicesTable = `
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
`

const populateBookingServicesTable = `
INSERT INTO booking_services (type_of_service, service_name, service_description, duration, target_pet)
VALUES
    ('Pet Sitting', 'Basic Pet Sitting', 'Basic pet sitting service for up to 2 hours per session.', '2 hours', 'Any'),
    ('Pet Walking', 'Daily Pet Walking', '30-minute walking service to keep your pet healthy and active.', '30 minutes', 'Dogs'),
    ('Pet Grooming', 'Full Grooming Session', 'Complete grooming service including bath, hair cut, and nail trimming.', '1 hour', 'Dogs, Cats');
`

const provisionConsolidatedUsersTabe = `
CREATE TABLE IF NOT EXISTS consolidated_users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  description TEXT,
  bio TEXT,
  profile_photo_url TEXT,
  contact_number VARCHAR(50),
  address TEXT,
  preferences JSONB,
  additional_info JSONB,
  services_offered JSONB,
  availability JSONB,
  last_seen TIMESTAMP WITH TIME ZONE,
  response_time INT, -- Assuming response time is measured in minutes
  cancelation_policy_type VARCHAR(50),
  reviews JSONB,
  user_location_info TEXT,
  skills JSONB
);
`

const populateConsolidatedUsersTable = `
INSERT INTO consolidated_users (
  email, 
  role, 
  status, 
  full_name, 
  description, 
  bio, 
  profile_photo_url, 
  contact_number, 
  address, 
  preferences, 
  additional_info, 
  services_offered, 
  availability, 
  last_seen, 
  response_time, 
  cancelation_policy_type, 
  reviews, 
  user_location_info, 
  skills
) VALUES 
('user1@example.com', 'sitter', 'active', 'User 1', 'User 1 description', 'Bio for User 1, passionate about pets.', 'http://example.com/photo1.jpg', '123-456-7801', '1 Pet Street, Petville, PV 00001', '{"contact_method": "email"}', '{"pet_ownership": "dogs"}', '{"service": "Pet Sitting", "rate": 30}', '{"days": ["Monday", "Wednesday"], "time_slots": ["Morning", "Afternoon"]}', '2023-05-20 12:00:00', 24, 'moderate', '{"ratings": [{"rating": 5, "comment": "Great experience!"}]}', 'Spacious backyard suitable for all pet sizes', '{"languages": ["English"], "certifications": ["First Aid"]}'),
('user2@example.com', 'pet owner', 'inactive', 'User 2', 'User 2 description', 'Cat enthusiast with two lovely Siamese cats.', 'http://example.com/photo2.jpg', '123-456-7802', '2 Pet Lane, Catville, CV 00002', '{"contact_method": "phone"}', '{"pet_ownership": "cats"}', NULL, NULL, '2023-06-15 14:00:00', 12, 'strict', '{"ratings": [{"rating": 4, "comment": "Very caring pet owner."}]}', NULL, '{"languages": ["French"], "certifications": ["Veterinary Experience"]}'),
('user3@example.com', 'admin', 'active', 'User 3', 'User 3 description', 'Admin profile with extensive experience in pet care platforms.', 'http://example.com/photo3.jpg', '123-456-7803', '3 Admin Drive, Adminville, AV 00003', '{"contact_method": "text"}', NULL, NULL, NULL, '2023-07-01 09:00:00', 5, 'flexible', NULL, NULL, '{"languages": ["Spanish"], "certifications": ["Pet Training"]}'),
('user4@example.com', 'readonly', 'banned', 'User 4', 'User 4 description', 'ReadOnly user with a history of informative pet care blogs.', 'http://example.com/photo4.jpg', '123-456-7804', '4 ReadOnly Road, Blogville, BV 00004', '{"contact_method": "email"}', NULL, NULL, NULL, '2023-08-22 16:30:00', 48, 'flexible', NULL, NULL, '{"languages": ["English"], "certifications": ["First Aid"]}'),
('user5@example.com', 'sitter', 'disabled', 'User 5', 'User 5 description', 'Experienced dog sitter with a passion for large breeds.', 'http://example.com/photo5.jpg', '123-456-7805', '5 Dog Park Blvd, Dogville, DV 00005', '{"contact_method": "email"}', '{"pet_ownership": "dogs"}', '{"service": "Pet Walking", "rate": 20}', '{"days": ["Tuesday", "Thursday"], "time_slots": ["Afternoon", "Evening"]}', '2023-09-10 11:45:00', 18, 'moderate', '{"ratings": [{"rating": 5, "comment": "Fantastic dog walker!"}]}', 'Large fenced yard, perfect for exercise', '{"languages": ["English", "Spanish"], "certifications": ["First Aid", "Veterinary Experience"]}');

`

//  create an array with all the SQL statements to execute
const sqlStatements = [
  provisionBookingServicesTable,
  populateBookingServicesTable,
  provisionConsolidatedUsersTabe,
  populateConsolidatedUsersTable
];

// Execute all SQL statements
(async () => {
  try {
    for (const sql of sqlStatements) {
      await provision(sql)
    }
    console.log('Provisioning script completed.')
  } catch (err) {
    console.error('Error in provision function', err)
  } finally {
    await pool.end() // Close the pool here, once all statements are executed
    console.log('Pool has been closed.')
  }
})()
