import fs from 'fs';
import { CreateBookDto } from '../modules/book/dto/CreateBookDto';

export const readJsonFile = (filePath: string) => {
  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    console.log(error);
  }
};

export const writeJsonFile = (filePath: string, data: CreateBookDto[]) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};
