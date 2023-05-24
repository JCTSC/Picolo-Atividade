// divListaProduto.insertAdjacentHTML('iniciar', '');
class Produto{
    constructor( Nome, Data_de_Cadastro, Descricao, Preco){
        this.Nome = Nome,
        this.Data_de_Cadastro = Data_de_Cadastro,
        this.Descricao = Descricao,
        this.Preco = Preco
    };
    
apresentar(){      
        return `
    <p>${this.Nome}</p> 
    <p> ${this.Data_de_Cadastro} </p> 
    <p> ${this.Descricao} </p>
    <p> ${'R$ ' + this.Preco} </p>
        `
    }
};
class ProdutosDestaque extends Produto{
    constructor(Nome, Data_de_Cadastro, Descricao,Preco, imagem){
        super(Nome, Data_de_Cadastro, Descricao,Preco),
        this.imagem = imagem
    }
    mostrarprodutodestaque(){
        return `
    <h1> ${this.Nome} </h1>
    <p> ${this.Data_de_Cadastro} </p>
    <p> ${this.Descricao} </p>
    <h3> ${'R$ '+this.Preco} </h3>
    <img src=${this.imagem}>  </img>`
    }
}

let produtos = new Produto("DragonBlade", "24/01/2007", "Uma espada legendária", 2.999,)
let div = document.getElementById("lista-produtos")

div.insertAdjacentHTML('iniciar', produtos.apresentar())



let produtodestaque = new ProdutosDestaque("Bone Sword","21/10/2001","Uma espada pior, porém usavel.", 1500, "Bone Sword.jpg")
let divD = document.getElementById("produto-destaque")

console.log(produtodestaque.mostrarprodutodestaque())
divD.insertAdjacentHTML('iniciar', produtodestaque.mostrarprodutodestaque())
