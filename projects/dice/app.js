var randomOne = Math.floor((Math.random() * 6 + 1));

var randomTwo = Math.floor((Math.random() * 6 + 1));

// if(randomOne !== randomTwo) {
var img1 = "./images/" + "dice" + randomOne + ".png";

var player1 = document.querySelectorAll(".row img")[0].setAttribute("src", img1);

// player1.toggle();

var randomTwo = Math.floor((Math.random() * 6 + 1));

var img2 = "./images/dice" + randomTwo + ".png";

var player2 = document.querySelectorAll(".row img")[1].setAttribute("src", img2);
// }

// else{
//     location.reload();
// }

if(randomOne < randomTwo) {
    document.querySelectorAll(".row h1")[0].innerHTML = `<h1 class="text-info winner">Player 2 wins</h1>`;
}
else{
    document.querySelectorAll(".row h1")[0].innerHTML = `<h1 class="text-light winner">Player 1 wins</h1>`;
}
if(randomOne === randomTwo) {
    document.querySelectorAll(".row h1")[0].innerHTML = `<h1 class="text-danger winner">Draw! <button class="btn btn-info" onClick="window.location.href=window.location.href">Click to play</button> again!!</h1>`;
    // document.querySelectorAll(".row h3")[0].innerHTML = "";
}

