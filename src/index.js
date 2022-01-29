import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const gameRoundsCount = 3;

export const startGame = (gameDescription, generateRoundsData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  const roundsData = generateRoundsData();
  for (let index = 0; index < gameRoundsCount; index += 1) {
    const question = car(roundsData[index]);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(roundsData[index]);

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
