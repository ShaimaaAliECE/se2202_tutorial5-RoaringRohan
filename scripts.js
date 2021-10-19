let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initializeBTN = document.createElement('button');
initializeBTN.innerText = 'Click Here to Start The Game'
document.getElementById('game-over-lbl').appendChild(initializeBTN);
initializeBTN.addEventListener('click', (initialEvent) => {initialEvent.target.hidden = true;});

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerVal = document.querySelector('b');
let userText = 'Next Player: ';
playerVal.innerText = userText;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for (let i = 0; i < 9; i++)
   {
       let cellID = 'c' + (i+1);
       var newButton = document.createElement('button');
       document.getElementById(cellID).appendChild(newButton);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let buttons = document.querySelectorAll('button');
for (let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', (event) => { takeCell(event)});
}
// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{   /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    event.target.innerText = nextPlayer;
    if (nextPlayer === 'X') {
        nextPlayer = 'O';
    }
    else{
        if (nextPlayer === 'O') {
            nextPlayer = 'X';
        }
    }

    let userText = 'Next Player: ' + nextPlayer;
    playerVal.innerText = userText;
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up 🙂 )
    event.target.disabled = 'disabled';


    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl')
        var headerNew = document.createElement('h1');
        headerNew.innerText = 'Game Over';
        lbl.appendChild(headerNew);
    }
    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment
    // I chose not to declare the winner for this assignment
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let clickedbuttons = true;
   for (let i = 0; i < buttons.length; i++)
   {
       if (!buttons[i].disabled)
       {
           clickedbuttons = false;
       }
   }
   return clickedbuttons;
}