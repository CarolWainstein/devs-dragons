import { Personagem } from "./personagem.js"

export class Mago extends Personagem { // extends: faz uma classe herdar outra
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'O mago é implacável!'

    constructor (nome, elementoMagico, levelMagico, inteligencia) {
        super(nome) // super: chama a classe pai, para poder ser usada dentro da classe que herdou os elementos
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia() {
        if(this.levelMagico >=5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }

}