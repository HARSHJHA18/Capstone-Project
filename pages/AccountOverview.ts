import { Page } from '@playwright/test';
import { Assert } from '../utils/assertion';

export class AccountOverview {

    constructor(public page: Page) { }

    async validateOverviewPage() {

        await this.page.waitForURL(
            '**/overview.htm'
        );

        await Assert.validateText(
            this.page.locator('h1.title').first(),
            'Accounts Overview'
        );
    }
}