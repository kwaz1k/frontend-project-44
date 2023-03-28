#!/usr/bin/env node

import game from '../src/index.js';
import getRandomNumber from '../src/utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const question = () => {
  const random = getRandomNumber();
  const isEven = (num) => num % 2 === 0;
  const even = isEven(random) ? 'yes' : 'no';
  return [random, even];
};

export default function brainEven() {
  game(gameTask, question);
}
  