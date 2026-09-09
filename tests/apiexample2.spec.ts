import {test, expect} from '@playwright/test';

test('API Example Test', async ({request}) => {
  // Make a GET request to the API endpoint
  const response = await request.get('https://api.restful-api.dev/objects/7');
    console.log('Response Status:', response.status());
    console.log('Response Body:',  await response.json());
    var responseBody = await response.json();
    var nameValue = responseBody.name;
    var manyr = responseBody.data.year;
    console.log('Name Value:', nameValue);
    console.log('Year Value:', manyr);
} )