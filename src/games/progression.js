import { cons } from '@hexlet/pairs';
import { startGame, gameRoundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const separator = '..';

const generateProgression = (start, length, step) => {
  const progression = [start];

  for (let index = 0; index < length - 1; index += 1) {
    progression.push(progression[index] + step);
  }

  return progression;
};

const hideProgressionElement = (progression, number) => {
  const progressionCopy = [...progression];
  progressionCopy[number] = separator;
  return progressionCopy;
};

const generateRoundsData = () => {
  const rounds = [];

  for (let index = 0; index < gameRoundsCount; index += 1) {
    const progressionStart = getRandomNumber(1, 10);
    const progressionLength = getRandomNumber(5, 15);
    const progressionStep = getRandomNumber(2, 7);
    const progression = generateProgression(progressionStart, progressionLength, progressionStep);
    const randomNumber = getRandomNumber(1, progression.length - 1);
    const progressionWithHideElement = hideProgressionElement(progression, randomNumber);
    const answer = String(progression[randomNumber]);
    const round = cons(progressionWithHideElement.join(' '), answer);
    rounds.push(round);
  }

  return rounds;
};

const startProgressionGame = () => startGame(gameDescription, generateRoundsData);

export default startProgressionGame;
