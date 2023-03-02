function getComputerChoice()
{
	let choice = Math.floor(Math.random()*3);
	if(choice == 0) return "Rock";
	else if(choice == 1) return "Paper";
	else return "Scissor";
}

function playRound(playerSelection, computerSelection)
{
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	let ans="";

	if(playerSelection == "rock")
	{
		if(computerSelection == "rock")  ans = "A Draw";
		else if(computerSelection == "paper") ans = "You Lose!. Paper beats Rock";
		else ans = "You Win! Rock beats Scissor!"
	
}	else if(playerSelection == "paper")
	{
		if(computerSelection == "paper")  ans = "A Draw";
		else if(computerSelection == "scissor") ans = "You Lose!. Scissor beats Paper";
		else ans = "You Win! Paper beat Rock"
	}
	else if(playerSelection == "scissor")
	{
		if(computerSelection == "scissor")  ans = "A Draw";
		else if(computerSelection == "rock") ans = "You Lose!. Rock beats scissor";
		else ans = "You Win! Scissor beat Paper"
	}
	else
	{
		ans = "Invalid move.Please select again."
	}

	const board = document.querySelector('.result');
	console.log(ans);
	if(ans.includes('Win'))
	{
		const score = document.querySelector('.result #userScore .score');
		let points = +score.textContent;
		score.textContent = '' + ++points; 
		if(points == 5)
		{
			alert('You win!');
		}
	}
	else if(ans.includes('Lose'))
	{
		const score = document.querySelector('.result #computerScore .score');
		let points = +score.textContent;
		score.textContent = '' + ++points;
		if(points == 5)
		{
			alert('You Lose!');
		}
	}
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener('click', () => {
	let move = getComputerChoice();
	playRound('rock', move);
});

paper.addEventListener('click', () => {
	let move = getComputerChoice();
	playRound('paper', move);
});

scissor.addEventListener('click', () => {
	let move = getComputerChoice();
	playRound('scissor', move);
});
