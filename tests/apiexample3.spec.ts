import {test} from '@playwright/test';

test('API Example Test', async ({request}) => {
  // Make a GET request to the API endpoint
  const response = await request.post('https://api.restful-api.dev/objects', {
    headers: {
      "Content-Type": "application/json"
    },
    data: {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}
  })

  var responseData = await response.json();
  console.log('Response Data:', responseData);

})