import {test} from '@playwright/test';

test('API Example Test', async ({request}) => {

    const response = await request.delete('https://api.restful-api.dev/objects/ff808181a067127101a0850e1b9453eb')
    var responseData = await response.json();
    console.log('Response:', responseData.message);

})