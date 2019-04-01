let userScore = 0
let compScore = 0
const userScoreSpan = document.getElementById('user-score')
const compScoreSpan = document.getElementById('computer-score')
const result = document.querySelector('.result > p')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

function getComputerChoice () {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}

function win (userChoice, compChoice) {
  userScore++
  userScoreSpan.textContent = userScore
  result.textContent = userChoice.replace(/\b\w/g, l => l.toUpperCase()) + ' beats ' + compChoice + '. You win.'
}

function lose (userChoice, compChoice) {
  compScore++
  compScoreSpan.textContent = compScore
  result.textContent = compChoice.replace(/\b\w/g, l => l.toUpperCase()) + ' beats ' + userChoice + '. You lose.'
}

function draw () {
  result.textContent = 'It\'s a draw.'
}

function game (userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice)
      break
    case 'scissorsrock':
    case 'rockpaper':
    case 'paperscissors':
      lose(userChoice, computerChoice)
      break
    default:
      draw()
      break
  }
}

function main () {
  rock.addEventListener('click', function () {
    game('rock')
  })

  paper.addEventListener('click', function () {
    game('paper')
  })

  scissors.addEventListener('click', function () {
    game('scissors')
  })
}

main()
