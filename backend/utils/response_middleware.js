const responseMiddleware = (req, res, next) => {
  // Original send function
  const originalSend = res.send

  // Override res.send
  res.send = function (body) {
    let responseBody

    // Assuming body is already an object or array (adjust logic as needed)
    if (typeof body !== 'object' || body instanceof Error) {
      responseBody = {
        success: false,
        error: body?.message || 'Unknown error'
      }
    } else {
      responseBody = {
        success: true,
        data: body
      }
    }

    // Set Content-Type to 'application/json'
    res.setHeader('Content-Type', 'application/json')
    // Call the original send function with the JSON string
    originalSend.call(this, JSON.stringify(responseBody))
  }
  next()
}

module.exports = responseMiddleware
