import { test, expect } from '@playwright/test';
import { ENV } from '../../config/env';
import { Assert } from '../../utils/assertion';

test.describe('Accounts API Tests', () => {

    test('@api Validate Accounts API', async ({ request }) => {

    const startTime = Date.now();

    const response = await request.get(`${ENV.apiBaseUrl}/accounts/13344`,
        {
            headers: {
                Accept: 'application/json'
            }
        });

    const responseTime = Date.now() - startTime;

    await Assert.statusCode(response, 200);

    await Assert.responseTime(responseTime, 20000);

    const body = await response.json();

    console.log(body);



});

    test('@api Validate Transaction API', async ({ request }) => {

        const startTime = Date.now();

        const response = await request.get(
            `${ENV.apiBaseUrl}/accounts/13344/transactions`,
            {
            headers: {
                Accept: 'application/json'
            }
        });

        const responseTime = Date.now() - startTime;

        await Assert.statusCode(response, 200);

        await Assert.responseTime(responseTime, 20000);

        const body = await response.json();

        console.log(body);

        expect(Array.isArray(body)).toBeTruthy();

    });

});