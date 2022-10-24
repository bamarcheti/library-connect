export class Author {
  constructor(
    public name: string,
    public qtdBooks = 0,
    public id?: string
  ) {}

  public validate() {
    this.validateName();
  }

  private validateName(){
    if (!this.name || this.name.trim().length == 0){
      throw new Error('autor é obrigatório e não pode ser vazio');
    }
  }
}