var player = 1;
var win = false;
var squares = document.getElementsByClassName("square");

Array.from(squares).forEach((square) => {
    square.addEventListener("click", turn);
});


function turn(props) {
    const square = props.target;

    if (player == 1) { // Fixed typo in `player`
        document.getElementById("turn").innerText ="players 1's turn" ; // Added `document.`
        
        square.innerText = "X";
        square.style.fontSize = "50px";
        square.style.textAlign = "center";
        
       
    }
    
}


