export interface CreateBookDto {
    title: string;
    qtdPages: number;
    authorId: string;
    publishDate: string;
    isDigital: boolean;
    sizeInKBytes: number;
    kindleCompatible: boolean;
} 