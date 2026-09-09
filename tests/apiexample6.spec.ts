import {test} from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

const data = parse (fs.readFileSync("tests/test.csv"), 
{
    columns: true, 
    skip_empty_lines: true
} )  
 

test('API Example Test', async ({page, context}) => {
    console.log('Data from CSV:', data);
}
)

