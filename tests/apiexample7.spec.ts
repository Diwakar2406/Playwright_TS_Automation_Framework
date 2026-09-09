import {test} from '@playwright/test';

test ('API Example Test', async ({request}) => {
    const username = 'diwakar@aatechventures.com';
    const password = 'ATATT3xFfGF0skIPr1Jn7EnJNCpp857qKi4WWqMcBNkQlFhWccqY-yn0sxpkWY9IgXPFyiLhuz7x-wMhnlYNUXjgFxGYRD5S0mwEMShQiDJVNqqA1iIKMwptnGZ4iOLK3U1kXvxJEb0yUsV-FYn8DG34T3t0tAQgeZp69nzukytSLP1mX52T2cc=ED2ED890';
    const credentials = `${username}:${password}`;
    const base64Credentials = Buffer.from(credentials).toString('base64');

    const response = await request.get('https://diwa24.atlassian.net/rest/api/3/dashboard', {
        headers: {
            'Authorization': `Basic ${base64Credentials}`
        }
    });

    console.log('Response Status:', response.status());
    console.log('Response Body:', await response.json());
    });
