const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

var button = document.getElementById('button')
button.addEventListener('click', handleButton)
button.addEventListener('click', showMessages)

function reloadPage() {
    location.reload();
}

function handleButton(){
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

var messages = [
    'Mantenha a cabeça erguida.',
    'Tenha fé em Deus.',
    'A vingança nunca é plena, mata a alma e a envenena.',
    'Be happy.'
];

function showMessages() {
    var random = Math.floor(Math.random() * messages.length);
    var messagesElement = document.getElementById('messages');

    messagesElement.textContent = messages[random];
}