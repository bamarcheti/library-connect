export interface CreateBookDto {
    title: string;
    qtdPages: number;
    author: string;
    online: boolean;
    size: number;
    kindleCompatible: boolean;
  }