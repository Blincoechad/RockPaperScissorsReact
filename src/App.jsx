import { useState } from "react";

// Every move a player is allowed to make. Kept in one place so the
// computer's random pick always stays in sync with the game rules.
const CHOICES = ["rock", "paper", "scissors"];

// Picks a random move for the computer. Math.random() returns a
// decimal between 0 (inclusive) and 1 (exclusive), so multiplying
// it by the length of the array and rounding down with Math.floor
// gives us a random, valid index to pull a choice from.
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

// Compares the player's move to the computer's move and returns the
// message that should be displayed. Rock beats scissors, scissors
// beats paper, and paper beats rock - those are the only three ways
// the player can win. Anything else is either a tie or a loss.
function getWinnerMessage(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie! 😐";
  }

  const playerWins =
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper");

  return playerWins ? "You won! 😀" : "You Lost, Computer wins 😢";
}

function App() {
  const base = import.meta.env.BASE_URL;

  // "result" holds the sentence shown inside the result box.
  // While it is null, we haven't played a round yet, so the
  // animated "Let's Play!..." intro is shown instead.
  const [result, setResult] = useState(null);

  // Runs when the player clicks Rock, Paper, or Scissors. It plays
  // one full round: get the computer's move, work out who won, and
  // save the outcome so it renders in the result box.
  function handlePlayerChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    const winnerMessage = getWinnerMessage(playerChoice, computerChoice);
    setResult(
      `You chose ${playerChoice}, computer chose ${computerChoice}. ${winnerMessage}`
    );
  }

  // Sends the game back to its starting screen by clearing the result.
  function handleReset() {
    setResult(null);
  }

  return (
    <>
      <h1>Rock, Paper, Scissors</h1>
      <h2>- Choose your Selection To Begin -</h2>

      <main>
        <div className="content">
          {/* Decorative icons floating around the choice buttons */}
          <img className="paper3" src={`${base}media/paper.png`} height={100} width={100} alt="Paper" />
          <img className="rock1" src={`${base}media/rock.png`} height={100} width={100} alt="rocks" />
          <img className="scissors3" src={`${base}media/scissors.png`} height={100} width={100} alt="scissors" />

          <div id="choices">
            <button className="button1" onClick={() => handlePlayerChoice("rock")}>
              Rock
            </button>
            <button className="button2" onClick={() => handlePlayerChoice("paper")}>
              Paper
            </button>
            <button className="button3" onClick={() => handlePlayerChoice("scissors")}>
              Scissors
            </button>
          </div>

          <div className="result-container">
            <p className="results" id="result">
              {result === null ? (
                <>
                  <span className="lets">Let's</span>
                  <br />
                  <span className="play">Play!</span>
                  <span className="dots">...</span>
                </>
              ) : (
                result
              )}
            </p>
          </div>

          <div>
            <img className="paper1" src={`${base}media/paper.png`} height={100} width={100} alt="Paper" />
            <img className="rock2" src={`${base}media/rock.png`} height={100} width={100} alt="rocks" />
            <img className="scissors2" src={`${base}media/scissors.png`} height={100} width={100} alt="scissors" />
          </div>
        </div>
      </main>

      <div className="resetButton">
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
        <h4 className="description">- Click Reset To Start Over-</h4>
      </div>

      {/* More decorative icons scattered around the page */}
      <img className="paper2" src={`${base}media/paper.png`} height={100} width={100} alt="Paper" />
      <img className="rock3" src={`${base}media/rock.png`} height={100} width={100} alt="rocks" />
      <img className="scissors1" src={`${base}media/scissors.png`} height={100} width={100} alt="scissors" />

      <div>
        <img className="logo" src={`${base}media/logo.png`} height={350} width={250} alt="logo" />
      </div>

      <footer>&copy; 2025 PixelDesigns. All rights reserved.</footer>
    </>
  );
}

export default App;
