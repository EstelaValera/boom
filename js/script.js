const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');
const emoji = "🥳"
const emoji2 = "🤯"


function startGame() {
    const userNumber = parseInt(userInput.value);

    if (userNumber < 1 || userNumber > 3 || isNaN(userNumber)) {
        result.textContent = "Por favor, introduce un número válido entre 1 y 3.";
        return;
    }

    result.textContent = "Iniciando cuenta atrás...";

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    setTimeout(() => {
        countdown.textContent = `Número correcto: ${randomNumber}`;


        if (userNumber === randomNumber) {
            result.textContent = "¡Has salvado el mundo! " + emoji ;
        } else {
            result.textContent = "¡La bomba ha estallado! " + emoji2;
        }
    }, 5000); 
}

restartButton.addEventListener('click', function() {
    userInput.value = ''; 
    countdown.textContent = '';
    result.textContent = '';
});

console.log(startGame)
