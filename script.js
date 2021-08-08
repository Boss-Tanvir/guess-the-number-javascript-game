'use strict';

// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number!')
// );

// document.querySelector('.number').textContent;

// document.querySelector('.guess').value = 13;

// document.querySelector('.score').textContent = '12';

const secretNumber = parseInt(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  // Match Score
  else if (guess === secretNumber) {
    let nt = (document.querySelector('.number').textContent = secretNumber);
    document.querySelector('.message').textContent = 'Correct Number!';
    document.body.style.backgroundColor = '#60B347';
    console.log(score);
    console.log('Its Match');
    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When score is low
  else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // when score is high
  else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too high';
    score--;
    document.querySelector('.score').textContent = score;
  }

  // lost the game
  else if (score === 0) {
    document.querySelector('.message').textContent = 'You lost the game!';
  }
});

// restart the game

document.querySelector('.again').addEventListener('click', function () {
  let guess = Number((document.querySelector('.guess').value = ''));
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
