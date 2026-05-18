# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2etesting.spec.ts >> Parabank E2E Flow >> @e2e TC002 - Small Amount Transfer
- Location: tests\e2e\e2etesting.spec.ts:17:13

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('heading', { name: 'Transfer Complete!' })
Expected substring: "Transfer Complete!"
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Transfer Complete!' })

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Smith
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Transfer Funds" [level=1]
- paragraph:
  - text: "Amount: $"
  - textbox: "50"
- text: "From account #"
- combobox:
  - option "12345" [selected]
  - option "12456"
  - option "12567"
  - option "12678"
  - option "12789"
  - option "12900"
  - option "13011"
  - option "13122"
  - option "13233"
  - option "13344"
  - option "30549"
  - option "31437"
  - option "54321"
- text: "to account #"
- combobox:
  - option "12345"
  - option "12456" [selected]
  - option "12567"
  - option "12678"
  - option "12789"
  - option "12900"
  - option "13011"
  - option "13122"
  - option "13233"
  - option "13344"
  - option "30549"
  - option "31437"
  - option "54321"
- button "Transfer"
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect, Locator, APIResponse } from '@playwright/test';
  2  | 
  3  | export class Assert {
  4  |     static verifyTrue(arg0: boolean, arg1: string) {
  5  |         throw new Error('Method not implemented.');
  6  |     }
  7  |     static async validateText(
  8  |         locator: Locator,
  9  |         expectedText: string
  10 |     ) {
> 11 |         await expect(locator).toContainText(expectedText);
     |                               ^ Error: expect(locator).toContainText(expected) failed
  12 |     }
  13 |     
  14 |     static async statusCode(
  15 |         response : APIResponse,
  16 |         expectedCode : number
  17 |     ){
  18 |         expect(response.status()).toBe(expectedCode);
  19 |     }
  20 |     
  21 |     static async responseTime(
  22 |         responseTime : number,
  23 |         maxTime : number
  24 |     ){
  25 |         expect(responseTime).toBeLessThan(maxTime);
  26 |     }
  27 | 
  28 |     static async validateValue(
  29 |         value : any
  30 |     ){
  31 |         expect(value).toBeDefined();
  32 |     }
  33 | 
  34 | }
```