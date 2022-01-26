import { cons } from '@hexlet/pairs';
import { startGame, gameRoundsCount, getRandomNumber } from '../index.js';

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

const generateRounds = () => {
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

const startPrimeGame = () => {
  const gameRounds = generateRounds();
  startGame(gameDescription, gameRounds);
};

export default startPrimeGame;
