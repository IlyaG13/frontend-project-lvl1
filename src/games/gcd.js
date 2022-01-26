import { cons } from '@hexlet/pairs';
import { startGame, gameRoundsCount, getRandomNumber } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return getGCD(number2, number1 % number2);
};

const generateRoundsData = () => {
  const rounds = [];

  for (let index = 0; index < gameRoundsCount; index += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const question = `${randomNumber1} ${randomNumber2}`;
    const answer = String(getGCD(randomNumber1, randomNumber2));
    const round = cons(question, answer);
    rounds.push(round);
  }

  return rounds;
};

const startGcdGame = () => {
  const roundsData = generateRoundsData();
  startGame(gameDescription, roundsData);
};

export default startGcdGame;
