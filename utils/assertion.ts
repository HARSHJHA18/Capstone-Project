import { expect, Locator, APIResponse } from '@playwright/test';

export class Assert {
    static verifyTrue(arg0: boolean, arg1: string) {
        throw new Error('Method not implemented.');
    }
    static async validateText(
        locator: Locator,
        expectedText: string
    ) {
        await expect(locator).toContainText(expectedText);
    }
    
    static async statusCode(
        response : APIResponse,
        expectedCode : number
    ){
        expect(response.status()).toBe(expectedCode);
    }
    
    static async responseTime(
        responseTime : number,
        maxTime : number
    ){
        expect(responseTime).toBeLessThan(maxTime);
    }

    static async validateValue(
        value : any
    ){
        expect(value).toBeDefined();
    }

}