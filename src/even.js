import readlineSync from 'readline-sync';

const correctAnswerCount = 3;

const getRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};

const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let index = 1; index <= correctAnswerCount; index += 1) {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \n Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');

    if (index === correctAnswerCount) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default startEvenGame;
