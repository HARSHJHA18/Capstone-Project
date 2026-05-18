import { test } from '../../fixtures/testFixtures';
import { expect } from '@playwright/test'
import { ENV } from '../../config/env';
import LoginPage from '../../pages/LoginPage';
import { AccountOverview } from '../../pages/AccountOverview';
import { TransferFunds } from '../../pages/TransferFunds';
import { readExcelFile } from '../../utils/excelReader2';
import path from 'path';

const filePath = path.join(__dirname, '../../testData/testData.xlsx');
const records = readExcelFile(filePath);

test.describe('Parabank E2E Flow', () => {

    for (const data of records) {

        test(`@e2e ${data.TestID} - ${data.TestCase}`, async ({ page, request }) => {

            const loginPage = new LoginPage(page);

            await loginPage.goto();

            await loginPage.login(ENV.username, ENV.password);

            const accountOverview = new AccountOverview(page);

            await accountOverview.validateOverviewPage();

            const transferFunds = new TransferFunds(page);

            await transferFunds.navigator();

            await transferFunds.fundTransfer(data.Amount, data.FromAccount, data.ToAccount);

            await transferFunds.TransferValidation(data.expectedMessage);

            //await page.waitForTimeout(2000);

            const transactionResponse = await request.get(`${ENV.apiBaseUrl}/accounts/${data.ToAccountNumber}/transactions`,
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }
            );
            const transactionBody = await transactionResponse.json();

            expect(transactionBody.length).toBeGreaterThan(0);

            console.log(`E2E Test Passed For : ${data.TestID}`);
        }
        );
    }
});
