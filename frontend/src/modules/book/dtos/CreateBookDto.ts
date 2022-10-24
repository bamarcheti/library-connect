export interface CreateBookDto {
  title: string;
  qtdPages: number;
  authorId: string;
  isDigital: boolean;
  sizeInKBytes: number;
  kindleCompatible: boolean;
  publishDate?: string;
}