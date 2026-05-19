import { Page } from '@playwright/test';
import { Assert } from '../utils/assertion';

export class TransferFunds {
    constructor(public page: Page) { }

    async navigator() {
        console.log('Navigating to Transfer Funds page');
        await this.page.locator('text=Transfer Funds').click();
    }
    async fundTransfer(
        amount: string,
        fromIndex: number,
        toIndex: number
    ) {
        await this.page.locator('#amount').fill(amount.toString());
        await this.page.selectOption('#fromAccountId', { index: fromIndex });
        await this.page.selectOption('#toAccountId', { index: toIndex });
        await this.page.locator('input[value="Transfer"]').click();
    }
    async TransferValidation(
        expectedMessage: string
    ) {
        await Assert.validateText(
            this.page.getByRole('heading', { name: expectedMessage }),
            expectedMessage
        )
        await this.page.screenshot({ path: `test-results/screenshots/transfer-confirmation-${Date.now()}.png` });
        console.log(`[TransferFunds] Validation passed: "${expectedMessage}"`);
    }
}