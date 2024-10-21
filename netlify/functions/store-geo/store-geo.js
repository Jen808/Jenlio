// This function will receive and log geolocation data from the client
const handler = async (event) => {
  try {
    // Parse the geolocation data received from the client
    const geoData = JSON.parse(event.body);
    console.log('Received geolocation data:', geoData);

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Geolocation data received successfully',
        data: geoData
      })
    };
  } catch (error) {
    // Handle any errors that occur
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred', error: error.toString() })
    };
  }
}

module.exports = { handler };

