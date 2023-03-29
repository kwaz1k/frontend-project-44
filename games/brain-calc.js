import game from '../src/index.js';

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  return [question, String(correctAnswer)];
}

const gameTask = 'What is the result of the expression?';

export default function brainCalc() {
    game(gameTask, generateQuestion);
}
