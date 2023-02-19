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
	}
	else if(playerSelection == "paper")
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

	return ans;
}

function game()
{
	let count = 0;
	for(let i=0; i<5; i++)
	{
		let playerSelection = prompt("What's your move?");
		let computerSelection = getComputerChoice();
		console.log(playerSelection, computerSelection);
		let result = playRound(playerSelection, computerSelection);
		if(result.includes("Win")) count++;
		console.log(result);
	}
	document.getElementById("result").innerHTML = `Your wins: ${count}`;
}

game();