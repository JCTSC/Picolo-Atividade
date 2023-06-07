

class Alienijenas {
    constructor(nome, idade, peso) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
    }
    mostrarAtributos(){
      try{ 
        return this.atributos()
        } catch(erro){
         console.log(erro.message)
        }
    } 
  /* erro */
    atributos() {
      if(this.nome != " " && this.idade != " " && this.especie != " " ){
      return {
        nome: this.nome,
        idade: this.idade,
        especie: this.especie
      }
    }
    else{
      throw new erro ("Tem que colocar o nome , idade , espécie")
  }
    }
  }
  const meuAlieAlienijenas = newAlienijenas("Irmao", 8, "");
  const atributos = meuAlieAlienijenas.mostrarAtributos();
  console.log(atributos.nome);   
  console.log(atributos.idade);  
  console.log(atributos.especie);