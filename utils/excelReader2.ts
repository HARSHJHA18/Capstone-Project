import * as EXCEL from 'xlsx';
import fs from 'fs';

type TestRecord = {
    TestID: string,
    TestCase: string,
    Amount: string,
    FromAccount: number,
    ToAccount: number,
    expectedMessage: string,
    FromAccountNumber: string,
    ToAccountNumber: string
}

export function readExcelFile(filePath: string) {
    const file = fs.readFileSync(filePath);
    const workbook = EXCEL.read(file);
    const sheet = workbook.Sheets[workbook.SheetNames[1]];
    const rowData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 });
    const records: TestRecord[] = rowData.slice(1).map((column: any) => ({
        TestID: column[0],
        TestCase: column[1],
        Amount: column[2],
        FromAccount: column[3],
        ToAccount: column[4],
        expectedMessage: column[5],
        FromAccountNumber: column[6],
        ToAccountNumber: column[7]


    }));
    return records;
}