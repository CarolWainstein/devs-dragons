import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

/*
    Opcão manual:

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedro'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
personagemPedrinho.tipo = 'Mago'
personagemPedrinho.level = 5


    As instancias quando eram baseadas na classe Personagem:

const personagemPedrinho = new Personagem ('Pedro', 12, 7, 5, 'Mago', 'lala')
const personagemJose = new Personagem ('Jose', 7, 6, 3, 'Arqueiro', 'lala')    

*/

const magoFilomena = new Mago('Filomena', 4, 'fogo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 5)
const arqueiroMagoTeo = new ArqueiroMago('Teo', 7, 10, 'ar', 4, 8)
const guerreiroWill = new Guerreiro('Will', 8)

const personagens = [magoFilomena, arqueiroBruno, arqueiroMagoTeo, guerreiroWill]

new PersonagemView(personagens).render() // funçao que está dentro do PersonagemView

console.log(personagens)