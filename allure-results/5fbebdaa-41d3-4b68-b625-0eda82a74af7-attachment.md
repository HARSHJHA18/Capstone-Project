# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance\performancetesting.spec.ts >> Parabank Performance Suite >> @performance UI Load Time
- Location: tests\performance\performancetesting.spec.ts:23:9

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 10000
Received:   13595
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - list [ref=e46]:
          - listitem [ref=e47]: ATM Services
          - listitem [ref=e48]:
            - link "Withdraw Funds" [ref=e49] [cursor=pointer]:
              - /url: services/ParaBank?wsdl
          - listitem [ref=e50]:
            - link "Transfer Funds" [ref=e51] [cursor=pointer]:
              - /url: services/ParaBank?wsdl
          - listitem [ref=e52]:
            - link "Check Balances" [ref=e53] [cursor=pointer]:
              - /url: services/ParaBank?wsdl
          - listitem [ref=e54]:
            - link "Make Deposits" [ref=e55] [cursor=pointer]:
              - /url: services/ParaBank?wsdl
        - list [ref=e56]:
          - listitem [ref=e57]: Online Services
          - listitem [ref=e58]:
            - link "Bill Pay" [ref=e59] [cursor=pointer]:
              - /url: services/bank?_wadl&_type=xml
          - listitem [ref=e60]:
            - link "Account History" [ref=e61] [cursor=pointer]:
              - /url: services/bank?_wadl&_type=xml
          - listitem [ref=e62]:
            - link "Transfer Funds" [ref=e63] [cursor=pointer]:
              - /url: services/bank?_wadl&_type=xml
        - paragraph [ref=e64]:
          - link "Read More" [ref=e65] [cursor=pointer]:
            - /url: services.htm
        - heading "Latest News" [level=4] [ref=e66]
        - list [ref=e67]:
          - listitem [ref=e68]: 05/18/2026
          - listitem [ref=e69]:
            - link "ParaBank Is Now Re-Opened" [ref=e70] [cursor=pointer]:
              - /url: news.htm#6
          - listitem [ref=e71]:
            - link "New! Online Bill Pay" [ref=e72] [cursor=pointer]:
              - /url: news.htm#5
          - listitem [ref=e73]:
            - link "New! Online Account Transfers" [ref=e74] [cursor=pointer]:
              - /url: news.htm#4
        - paragraph [ref=e75]:
          - link "Read More" [ref=e76] [cursor=pointer]:
            - /url: news.htm
  - generic [ref=e78]:
    - list [ref=e79]:
      - listitem [ref=e80]:
        - link "Home" [ref=e81] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e82]:
        - link "About Us" [ref=e83] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e84]:
        - link "Services" [ref=e85] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e86]:
        - link "Products" [ref=e87] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e88]:
        - link "Locations" [ref=e89] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e90]:
        - link "Forum" [ref=e91] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e92]:
        - link "Site Map" [ref=e93] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e94]:
        - link "Contact Us" [ref=e95] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e96]: © Parasoft. All rights reserved.
    - list [ref=e97]:
      - listitem [ref=e98]: "Visit us at:"
      - listitem [ref=e99]:
        - link "www.parasoft.com" [ref=e100] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1   | import { test } from '../../fixtures/testFixtures';
  2   | import { expect } from '@playwright/test';
  3   | 
  4   | import { ENV } from '../../config/env';
  5   | 
  6   | import LoginPage from '../../pages/LoginPage';
  7   | 
  8   | import { Assert } from '../../utils/assertion';
  9   | 
  10  | import { readExcelFile } from '../../utils/excelReader';
  11  | 
  12  | import path from 'path';
  13  | 
  14  | const filePath = path.join(
  15  |     __dirname,
  16  |     '../../testData/testData.xlsx'
  17  | );
  18  | 
  19  | const records = readExcelFile(filePath);
  20  | 
  21  | test.describe('Parabank Performance Suite', () => {
  22  | 
  23  |     test('@performance UI Load Time',async ({ page }) => {
  24  |             const loginPage =new LoginPage(page);
  25  |             const start = Date.now();
  26  |             await loginPage.goto();
  27  | 
  28  |             const loadTime =Date.now() - start;
  29  | 
  30  |             console.log(`UI Load Time : ${loadTime} ms`);
  31  | 
  32  |             expect(loadTime)
> 33  |                 .toBeLessThan(10000);
      |                  ^ Error: expect(received).toBeLessThan(expected)
  34  |         }
  35  |     );
  36  | 
  37  |     for (const data of records) {
  38  | 
  39  |         test(
  40  |             `@performance API Response Time ${data.TestID}`,
  41  |             async ({ request }) => {
  42  | 
  43  |                 const start = Date.now();
  44  | 
  45  |                 const response =
  46  |                     await request.get(
  47  |                         `${ENV.apiBaseUrl}/accounts/13344`,
  48  |                         {
  49  |                             headers: {
  50  |                                 Accept:
  51  |                                     'application/json'
  52  |                             }
  53  |                         }
  54  |                     );
  55  | 
  56  |                 const responseTime =
  57  |                     Date.now() - start;
  58  | 
  59  |                 console.log(
  60  |                     `API Response Time : ${responseTime} ms`
  61  |                 );
  62  | 
  63  |                 await Assert.statusCode(response,200);
  64  | 
  65  |                 expect(responseTime).toBeLessThan(5000);
  66  |             }
  67  |         );
  68  |     }
  69  | 
  70  |     for (const data of records) {
  71  | 
  72  |         test(
  73  |             `@performance Parallel Request ${data.TestID}`,
  74  |             async ({ request }) => {
  75  | 
  76  |                 const parallelCount = 20;
  77  | 
  78  |                 const requests =Array.from({length: parallelCount});
  79  | 
  80  |                 const start = Date.now();
  81  | 
  82  |                 const responses =
  83  |                     await Promise.all(requests.map(() =>request.get(`${ENV.apiBaseUrl}/accounts/13344`,
  84  |                                 {
  85  |                                     headers: {
  86  |                                         Accept:
  87  |                                             'application/json'
  88  |                                     }
  89  |                                 }
  90  |                             )
  91  |                         )
  92  |                     );
  93  | 
  94  |                 const totalTime =Date.now() - start;
  95  | 
  96  |                 console.log(`20 Parallel Requests Time : ${totalTime} ms`);
  97  | 
  98  |                 for (const response of responses) {
  99  | 
  100 |                     await Assert.statusCode(response,200
  101 |                     );
  102 |                 }
  103 | 
  104 |                 expect(responses.length).toBe(20);
  105 |             }
  106 |         );
  107 |     }
  108 | });
```