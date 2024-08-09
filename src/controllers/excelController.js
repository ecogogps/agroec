import xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';

export const importExcel = (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded' });
    }

    const workbook = xlsx.readFile(req.file.path);
    const sheetNameList = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNameList[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    // Process data as needed
    res.status(200).send({ message: 'File processed successfully', data });
};
