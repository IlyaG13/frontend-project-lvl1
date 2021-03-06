import { cons } from '@hexlet/pairs';
import { startGame, gameRoundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundsData = () => {
  const rounds = [];

  for (let index = 0; index < gameRoundsCount; index += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const answer = isPrime(randomNumber) ? 'yes' : 'no';
    const question = randomNumber;
    const round = cons(question, answer);
    rounds.push(round);
  }

  return rounds;
};

const startPrimeGame = () => startGame(gameDescription, generateRoundsData);

export default startPrimeGame;
