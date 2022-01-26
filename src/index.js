import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const gameRoundsCount = 3;

export const getRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};

export const startGame = (gameDescription, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let index = 0; index < gameRoundsCount; index += 1) {
    const question = car(rounds[index]);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = cdr(rounds[index]);

    if (userAnswer !== trueAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
