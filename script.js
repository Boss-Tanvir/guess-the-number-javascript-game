'use strict';

let score = 20;
let highscore = 0;
const secretNumber = parseInt(Math.random() * 20) + 1;

const displayMeassage = meassage => {
  document.querySelector('.message').textContent = meassage;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMeassage('No Number!');
  }
  // Match Score
  else if (guess === secretNumber) {
    let nt = (document.querySelector('.number').textContent = secretNumber);
    displayMeassage('Correct Number!');
    document.body.style.backgroundColor = '#60B347';
    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber && score > 0) {
    displayMeassage(guess > secretNumber ? 'Too high' : 'Too low');
    score--;
    // document.querySelector('.score').textContent = score;
    displayScore(score);
  }

  // lost the game
  else if (score === 0) {
    displayMeassage('You lost the game!');
  }
});

// restart the game

document.querySelector('.again').addEventListener('click', function () {
  let guess = Number((document.querySelector('.guess').value = ''));
  displayMeassage('Start guessing!');
  // document.querySelector('.score').textContent = 20;
  displayScore(score);
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
