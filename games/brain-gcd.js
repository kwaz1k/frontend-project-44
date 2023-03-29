import game from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const generateQuestion = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

const brainGcd = () => {
  game(gameTask, generateQuestion);
};

export default brainGcd;