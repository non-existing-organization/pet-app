const express = require('express')
const router = express.Router()
const pool = require('../utils/db_connector')

/**
 * @swagger
 * /list-booking-services:
 *   get:
 *     summary: List booking services
 *     description: Retrieve a list of booking services along with additional pet facts.
 *     tags: [Booking Services]
 *     responses:
 *       200:
 *         description: Successfully fetched booking services and pet facts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status of the response.
 *                 message:
 *                   type: string
 *                   description: Response message indicating the successful retrieval of booking services.
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: Unique identifier for the booking service.
 *                       type_of_service:
 *                         type: string
 *                         description: The category of the booking service (e.g., Pet Sitting, Pet Walking, Pet Grooming).
 *                       service_name:
 *                         type: string
 *                         description: The name of the booking service.
 *                       service_description:
 *                         type: string
 *                         description: A detailed description of the service offered.
 *                       duration:
 *                         type: string
 *                         description: The duration of the service session.
 *                       target_pet:
 *                         type: string
 *                         description: The type of pet targeted by the service (e.g., Any, Dogs, Cats).
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         description: Timestamp of when the service was created.
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         description: Timestamp of the last update to the service details.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status of the response indicating an error.
 *                 message:
 *                   type: string
 *                   description: Error message describing the server problem.
 *                 error:
 *                   type: object
 *                   properties:
 *                     length:
 *                       type: integer
 *                       description: The length of the error message.
 *                     name:
 *                       type: string
 *                       description: Name of the error.
 *                     severity:
 *                       type: string
 *                       description: Severity level of the error.
 *                     code:
 *                       type: string
 *                       description: Error code.
 *                     position:
 *                       type: string
 *                       description: Position of the error in the query.
 *                     file:
 *                       type: string
 *                       description: The file where the error occurred.
 *                     line:
 *                       type: string
 *                       description: Line number in the file where the error occurred.
 *                     routine:
 *                       type: string
 *                       description: The routine where the error occurred.
 */

router.get('/list-booking-services', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM booking_services')
    // Directly send data; middleware will format it
    res.send([...result.rows])
  } catch (error) {
    console.error('Error fetching booking services:', error)
    // Pass the error to next() so the error-handling middleware can catch it
    next(error) // This ensures the error middleware handles it
  }
})

module.exports = router
