import game from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const generateQuestion = () => {
  const progressionLength = getRandomNumber(6) + 5;
  const hiddenNumberIndex = getRandomNumber(progressionLength);
  const progression = [];
  const step = getRandomNumber(10) + 1;
  let currentNum = getRandomNumber();
  let correctAnswer = null;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenNumberIndex) {
      progression.push('..');
      correctAnswer = currentNum;
    } else {
      progression.push(currentNum);
    }
    currentNum += step;
  }
  const question = `Question: ${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};

const gameTask = 'What number is missing in the progression?';

export default function brainProgression() {
  game(gameTask, generateQuestion);
}
