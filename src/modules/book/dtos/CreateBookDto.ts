export interface CreateBookDto {
  title: string;
  qtdPages: number;
  authorName: string;
  digital: boolean;
  size: number;
  kindleCompatible: boolean;
}