var randomOne = Math.floor((Math.random() * 10 + 1));

var img1 = "./images/" + randomOne + ".jpg";

var meme = document.querySelectorAll(".row img")[0].setAttribute("src", img1);
