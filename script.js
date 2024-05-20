let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);

// comentamos la funcion para probar de otra forma con test de si esta en rango
// const compareGuesses = (humanGuess, computerGuess, secretTarget) => Math.abs(humanGuess-secretTarget) > Math.abs(computerGuess-secretTarget) ? false : true;

function compareGuesses(humanGuess, computerGuess, secretTarget) {
    if (humanGuess > 9 || humanGuess < 0) {
        alert('el numero debe estar entre 0 y 9');
        return false;
    } 
    if (Math.abs(humanGuess-secretTarget) > Math.abs(computerGuess-secretTarget)) {
        return false;
    } else { 
        return true;
    }
}


const updateScore = (winner) => winner === 'human' ? humanScore += 1 : computerScore += 1;

const advanceRound = () => currentRoundNumber += 1;

/* seccion solo para probar las funciones

function test () {
    const target = generateTarget();
    const human = generateTarget();
    const computer = generateTarget();

    console.log('Ronda ' + currentRoundNumber);
    advanceRound();

    console.log('Target: ' + target);
    console.log('Human: ' + human);
    console.log('Computer: ' + computer);

    if (compareGuesses(human, computer, target)) {
        updateScore('human');
    } else {
        updateScore('computer');
    }

    console.log('Human score: ' + humanScore);
    console.log('Computer score: ' + computerScore);
    console.log('');
}

test();
test();
test();
test();
test();

*/
