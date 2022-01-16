import { cons } from '@hexlet/pairs';
import { startGame, gameRoundsCount, getRandomNumber } from '../index.js';

const operators = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';

const getMathResult = (number1, number2, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      return null;
  }

  return result;
};

const generateRoundsData = () => {
  const rounds = [];

  for (let index = 0; index < gameRoundsCount; index += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomOperator = getRandomNumber(0, operators.length - 1);
    const question = `${randomNumber1} ${operators[randomOperator]} ${randomNumber2}`;
    const answer = String(getMathResult(randomNumber1, randomNumber2, operators[randomOperator]));
    const round = cons(question, answer);
    rounds.push(round);
  }

  return rounds;
};

const startCalcGame = () => {
  const roundsData = generateRoundsData();
  startGame(gameDescription, roundsData);
};

export default startCalcGame;
