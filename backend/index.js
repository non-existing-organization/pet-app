const fastify = require('fastify')({ logger: true });
require('dotenv').config();

// Register the CORS plugin with default options for simplicity
// Adjust the CORS settings according to your security requirements
fastify.register(require('@fastify/cors'), {
  origin: true, // Allows all origins
  // For production, you might want to specify allowed origins:
  // origin: ["https://yourfrontenddomain.com"],
});

// PostgreSQL connection setup
fastify.register(require('@fastify/postgres'), {
  connectionString: process.env.DATABASE_URL,
});

// Swagger documentation setup
fastify.register(require('@fastify/swagger'), {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Pet API',
      description: 'API for managing pets',
      version: '0.1.0',
    },
    host: 'localhost:3001',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true,
});

// Ensure the pets table exists
async function ensureTableExists() {
  const client = await fastify.pg.connect();
  const queryText = `
    CREATE TABLE IF NOT EXISTS pets (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL
    );
  `;
  try {
    await client.query(queryText);
    console.log('Checked the pets table, created if not exist');
  } catch (err) {
    console.error('Error ensuring pets table exists', err);
    throw err;
  } finally {
    client.release();
  }
}

// Root route
fastify.get('/', async () => {
  return { hello: 'world' };
});

// Add a new pet
fastify.post('/pets', async (request) => {
  const { name, type } = request.body;
  const client = await fastify.pg.connect();
  const { rows } = await client.query(
    'INSERT INTO pets(name, type) VALUES($1, $2) RETURNING *',
    [name, type]
  );
  client.release();
  return rows[0];
});

// Get all pets
fastify.get('/pets', async () => {
  const client = await fastify.pg.connect();
  const { rows } = await client.query('SELECT * FROM pets');
  client.release();
  return rows;
});

// Run the server!
const start = async () => {
  try {
    // Register plugins and routes here

    // Ensure the server and plugins are ready
    await fastify.ready();

    // Now that the server is ready, ensure the table exists
    await ensureTableExists();

    // After ensuring the table exists, start listening for requests
    await fastify.listen({ port: 3001, host: '0.0.0.0' });
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
