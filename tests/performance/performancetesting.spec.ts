import { test } from '../../fixtures/testFixtures';
import { expect } from '@playwright/test';

import { ENV } from '../../config/env';

import LoginPage from '../../pages/LoginPage';

import { Assert } from '../../utils/assertion';

import { readExcelFile } from '../../utils/excelReader';

import path from 'path';

const filePath = path.join(
    __dirname,
    '../../testData/testData.xlsx'
);

const records = readExcelFile(filePath);

test.describe('Parabank Performance Suite', () => {

    test('@performance UI Load Time',async ({ page }) => {
            const loginPage =new LoginPage(page);
            const start = Date.now();
            await loginPage.goto();

            const loadTime =Date.now() - start;

            console.log(`UI Load Time : ${loadTime} ms`);

            expect(loadTime)
                .toBeLessThan(10000);
        }
    );

    for (const data of records) {

        test(
            `@performance API Response Time ${data.TestID}`,
            async ({ request }) => {

                const start = Date.now();

                const response =
                    await request.get(
                        `${ENV.apiBaseUrl}/accounts/13344`,
                        {
                            headers: {
                                Accept:
                                    'application/json'
                            }
                        }
                    );

                const responseTime =
                    Date.now() - start;

                console.log(
                    `API Response Time : ${responseTime} ms`
                );

                await Assert.statusCode(response,200);

                expect(responseTime).toBeLessThan(5000);
            }
        );
    }

    for (const data of records) {

        test(
            `@performance Parallel Request ${data.TestID}`,
            async ({ request }) => {

                const parallelCount = 20;

                const requests =Array.from({length: parallelCount});

                const start = Date.now();

                const responses =
                    await Promise.all(requests.map(() =>request.get(`${ENV.apiBaseUrl}/accounts/13344`,
                                {
                                    headers: {
                                        Accept:
                                            'application/json'
                                    }
                                }
                            )
                        )
                    );

                const totalTime =Date.now() - start;

                console.log(`20 Parallel Requests Time : ${totalTime} ms`);

                for (const response of responses) {

                    await Assert.statusCode(response,200
                    );
                }

                expect(responses.length).toBe(20);
            }
        );
    }
});