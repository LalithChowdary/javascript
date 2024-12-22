var player = 1;
var win = false;
var squares = document.getElementsByClassName("square");

Array.from(squares).forEach((square) => {
    square.addEventListener("click", turn);
});

document.getElementById("turn").innerText ="players 1's turn" ; // Added `document.`

function turn(props) {
    const square = props.target;
    if(square.innerText !=""){
        alert("Please enter a valid move");
    }

    else if (player == 1) { // Fixed typo in `player`
        square.innerText = "X";
        square.style.fontSize = "50px";
        square.style.textAlign = "center";

        setTimeout(() =>{
        checkWin();
        player = 2;
        document.getElementById("turn").innerText ="players 2's turn" ; // Added `document.`
        }, 50);
        

        }
          
    else{
        square.innerText = "O";
        square.style.fontSize = "50px";
        square.style.textAlign = "center";
        setTimeout(() =>{
        checkWin();
        player = 1;
        document.getElementById("turn").innerText ="players 1's turn" ; // Added `document.`
    }, 50);
    }
    
}

function checkWin() {

    
    let wincombo=[
        [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
    ]

    wincombo.map(win=>
    {
        let win0=document.getElementById("square"+win[0]).innerText;
        let win1=document.getElementById("square"+win[1]).innerText;
        let win2=document.getElementById("square"+win[2]).innerText;
        if(win0==win1 && win1==win2 && win0!="")
        {
            alert("Player "+player+" wins");
            reset();
            

        }
    }
    )
    let allFilled = Array.from(squares).every(square => square.innerText !== "");
    if (allFilled) {
        alert("It's a draw!");
        reset();
    }

    
}

function reset() {
    Array.from(squares).forEach((square) => {
        square.innerText = "";
    });
    player = 1;
}

