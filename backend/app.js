const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const bookingServicesRouter = require('./v1/list-booking-services') // Make sure this path matches your structure
const responseMiddleware = require('./utils/response_middleware')

const app = express()
const port = 3001

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Pet Sitter API',
    version: '1.0.0',
    description: 'This is an API for he Pet Sitter App.<br>You can download the OpenAPI specification directly from [/openapi.json](/openapi.json).'
  },
  tags: [
    {
      name: 'Booking Services',
      description: 'Endpoints related to booking services'
    }
  ],
  servers: [
    {
      url: '/api/v1',
      description: 'Version 1'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearer: 'JWT'
      }
    }
  }
}

// Options for the swagger docs
const options = {
  swaggerDefinition,
  explorer: true,
  swaggerOptions: {
    validatorUrl: null
  },
  // Paths to files containing OpenAPI definitions
  apis: ['./v1/*.js']
}

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(options)

// Serve Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options))

// Serve the Swagger specification directly from memory at this route
app.get('/openapi.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

// Protected basic route with authentication middleware
app.get('/', (req, res) => {
  // This code will only be reached if the authentication is successful
  res.send('Hello World!')
})

// Apply the response middleware globally
app.use(responseMiddleware)

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({ success: false, error: err.message })
})

// Use versioned routes
app.use('/api/v1', bookingServicesRouter)

// Start server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`)
})
