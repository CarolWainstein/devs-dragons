import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago' // para quando a propriedade é estatica, precisa colocar 'constructor' quando citada
    static descricao = 'Detentor de lancas e flechas mágicas!'

    constructor (nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.ladoArqueiro = new Arqueiro (nome, destreza)
        this.ladoMago = new Mago (nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}