import {test} from '@playwright/test';

test('API Example Test', async ({request}) => {
 const response = await request.put('https://api.restful-api.dev/objects/ff808181a067127101a0850e1b9453eb',
    {
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

    var CPUModel = responseData.updatedAt;
    console.log('CPU Model:', CPUModel);
})