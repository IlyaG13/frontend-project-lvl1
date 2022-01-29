import { cons } from '@hexlet/pairs';
import { startGame, gameRoundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRoundsData = () => {
  const rounds = [];

  for (let index = 0; index < gameRoundsCount; index += 1) {
    const question = getRandomNumber();
    const answer = isEven(question) ? 'yes' : 'no';
    const round = cons(question, answer);
    rounds.push(round);
  }

  return rounds;
};

const startEvenGame = () => startGame(gameDescription, generateRoundsData);

export default startEvenGame;
