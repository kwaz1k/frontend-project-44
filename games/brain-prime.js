import game from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestion = () => {
  const number = getRandomNumber(100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default function brainPrime() {
  const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(greeting, generateQuestion);
}
