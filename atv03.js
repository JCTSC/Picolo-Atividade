class NerdIF {
    constructor(estudante, cosplay, nota_cosplay) {
      this.estudante = estudante;
      this.cosplay = cosplay;
      this.nota_cosplay = nota_cosplay;
    }
    retornarAtributos() {
        try{
      return this.atributos()
        }
    }
    atributos() {
        if(this.estudante != "" && this.cosplay != "" && this.nota_cosplay != "");{
        return( )    
        }
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      };
    }
  }
  const aluno = new NerdIF("Marques", "Doomfanger", 0);
  const atributos = aluno.retornarAtributos();
  console.log(atributos.estudante); 
  console.log(atributos.cosplay);   
  console.log(atributos.nota_cosplay);
