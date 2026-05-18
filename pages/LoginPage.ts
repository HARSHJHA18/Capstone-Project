import { Page, Locator } from '@playwright/test';
import { ENV } from '../config/env';

export default class LoginPage {
    constructor(public page: Page) {

    }

    async goto() {
        await this.page.goto(ENV.baseUrl);
    }

    async login(
        username: string,
        password: string
    ) {
        await this.page.locator('input[name="username"]').fill(username);

        await this.page.locator('input[name="password"]').fill(password);

        await this.page.locator('input[value="Log In"]').click();
    }
}