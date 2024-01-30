export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    // descricao

    constructor (nome, level) {
        this.nome = nome
        // this.vida = vida
        // this.mana = mana
        this.#level = 1
        // this.descricao = descricao
    }

    aumentarLevel() {
        this.level += 1
    }

    diminuirLevel(){
        this.level -= 1
    }

    get level() { // o get associa a propriedade a uma funçao, fazendo com que ela possa ser lida mesmo sendo privada
        return this.#level
    }

    set level(novoLevel) { // o set consegue alterar o valor da propriedade privada
        if(novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel
        }
    }

    obterInsignia() {
        if(this.#level >= 5) {
            return `Implacavel ${this.constructor.tipo}` // precisa do 'constructor'porque a propriedade 'tipo' é estatica
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.level === personagem2.level) {
            return `Empate!`
        }
        if(personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor.`
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor.`
        
    }
}