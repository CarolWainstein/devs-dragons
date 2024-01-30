# Devs & Dragons - Character Cards

This project is a character card display for a game called "Devs & Dragons." It was designed as part of a course on Alura and implemented by Carolina Wainstein. The game involves creating and showcasing characters with different attributes, such as life, mana, level, and type.

## Technologies Used
The project utilizes the following technologies:

- **HTML:** The structure of the web pages.
- **CSS:** Styling to enhance the visual appeal.
- **JavaScript:** Functionality and interactivity.

## Project Structure
- **HTML (`index.html`):** Defines the structure of the web page, including links to CSS and JavaScript files, and the layout for character cards.
- **CSS (`style.css`, `modal.css`, `reset.css`):** Provides styling to create an attractive and consistent design for the character cards, modal, and overall layout.
- **JavaScript (`index.js`, `personagem.js`, `personagem-view.js`, and others):** Implements the logic behind the character cards, modal, and interactions. It includes the definition of character classes, rendering functions, and event listeners.

## Character Classes
The project defines different character classes, each with unique attributes and behaviors:

- **Personagem:** The base class for all characters, with properties like name, life, mana, level, and methods for level manipulation and obtaining an insignia.

- **Mago, Arqueiro, ArqueiroMago, Guerreiro:** Subclasses that inherit from Personagem, each representing a specific type of character with additional attributes and methods.

## Usage
To view the character cards, simply open the `index.html` file in a web browser. The cards will be displayed, showcasing characters created using different classes.

## Creating Characters
Characters are created using JavaScript in the `index.js` file. You can customize the characters by adjusting their attributes like name, life, mana, level, and type. Below is an example:

```javascript
const magoFilomena = new Mago('Filomena', 4, 'fogo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 7, 5);
// ... create more characters

const personagens = [magoFilomena, arqueiroBruno, /*... add other characters*/];
new PersonagemView(personagens).render();
```
## Dueling Characters
The project includes a "Duel!" button that allows you to select two characters and determine the winner based on their levels. Simply click the characters you want to duel, and then click the "Duel!" button.

## Acknowledgments
Alura Courses: The design inspiration and initial guidance for this project were provided by Alura courses.
Feel free to explore and modify the project as needed. Happy gaming!

