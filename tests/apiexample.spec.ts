import {test, expect} from '@playwright/test';

test('API Example Test', async ({request}) => {
  // Make a GET request to the API endpoint
  const response = await request.get('https://api.restful-api.dev/objects');   
  console.log('Response Status:', response.status());
  console.log('Response Body:',  await response.json());

  // Assert the response status code
  expect(response.status()).toBe(200);

})