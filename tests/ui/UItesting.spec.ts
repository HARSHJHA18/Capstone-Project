import { test } from '../../fixtures/testFixtures';
import { ENV } from '../../config/env'
import LoginPage from '../../pages/LoginPage';
import { AccountOverview } from '../../pages/AccountOverview';
import { TransferFunds } from '../../pages/TransferFunds';
import { readExcelFile } from '../../utils/excelReader';
import path from 'path';

const filePath = path.join(__dirname, '../../testData/testData.xlsx');
const records = readExcelFile(filePath);


test.describe('UI testing', () => {
    for (const data of records) {
        test(`@ui Transfer ${data.TestID} and ${data.TestCase}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goto();
            await loginPage.login(ENV.username, ENV.password);

            const overviewPage = new AccountOverview(page);
            await overviewPage.validateOverviewPage();

            const fundTransfer = new TransferFunds(page);
            await fundTransfer.navigator();
            await fundTransfer.fundTransfer(data.Amount, data.FromAccount, data.ToAccount);
            await fundTransfer.TransferValidation(data.expectedMessage);
        });
    }
});