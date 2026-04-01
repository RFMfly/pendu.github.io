const foodTheme = ['🍎', '🍌', '🍇', '🥦', '🍕', '🍦', '🍩', '🥑', '🍔', '🍓'];
const animalsTheme = ['🦁', '🐸', '🦒', '🐧', '🐙', '🦋', '🦉', '🐘', '🐷', '🐝'];
const adventureTheme = ['🚀', '🚲', '🚁', '⛵', '🚜', '🛸', '🚂', '🚒', '🛹', '🎈'];
const objectsTheme = ['🎁', '🕶️', '🎸', '☂️', '🔑', '🎨', '⚽', '⏰', '💡', '🌵'];

let zoneJeu = document.querySelector(".jeu");

function generate() {
    const deck = [...foodTheme,...foodTheme]
    deck.sort(() => Math.random() - 0.5);
}
