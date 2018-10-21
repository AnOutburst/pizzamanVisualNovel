
var pizzaMan;
var textarea;
var dialog;
var options;
var choice1;
var choice2;
var choice3;
var currentArr;
var currentIndex;
var choices;

function live() {
    currentArr = intro;
    currentIndex = 0;
    pizzaMan = document.getElementById("pizzaMan");
    textbox = document.getElementById("textbox")
    dialog = document.getElementById("textarea");
    options = document.getElementById("choices");

    choice1 = document.getElementById("choice1");
    choice2 = document.getElementById("choice2");
    choice3 = document.getElementById("choice3");
    progressText();
}

function progressText() {

    if (currentIndex == currentArr.length - 1) {
        dialog.style.display = "none";
        dialog.innerHTML = "";
        options.style.display = "block";
        console.log(currentArr[currentIndex][0]);
        choices = currentArr[currentIndex][0].split('|');
        choice1.innerText = choices[0];
        choice2.innerText = choices[1];
        if (choices.length == 3)
            choice3.innerText = choices[2];
    } else {
        options.style.display = "none";
        dialog.style.display = "box";
        let words = currentArr[currentIndex][0];
        console.log(words);
        dialog.innerHTML = words;
        if (currentArr[currentIndex][1].includes("avatar")) {
            let avatarName = currentArr[currentIndex][1].substring(7, currentArr[currentIndex][1].length - 1);
            avatar(avatarName);
        }
        currentIndex++
    }
}

function switchPath(path) {
    options.innerHTML = "";

}

function avatar(avNum) {
    console.log(avNum)
    switch (avNum) {
        case "neutral":
            pizzaMan.src = "./assets/man/pizzaNeutral.png";
            break;
        case "hmm":
            pizzaMan.src = "./assets/man/pizzaHmm.png";
            break;
        case "sus":
            pizzaMan.src = "./assets/man/pizzaNeutral.png";
            break;
        case "wow":
            pizzaMan.src = "./assets/man/pizzaNeutral.png";
            break;
        case "annoyed":
            pizzaMan.src = "./assets/man/pizzaAnnoyedSimple.png";
            break;


    }

}

function question() {

}



var intro = [["It's another tuesday night home alone. Earlier you ordered pizza, though it has yet to arrive.", ""],
["*ding dong*\nThat must be it now.", ""]
    , ["'Hello, that'll be 19.53'", "avatar(neutral)"]
    , ["Smiling, you quickly realize somethong is wrong as you go for your wallet...", ""]
    , ["You don't have your wallet! you quickly realiz you must find a way out of this!", ""]
    , ["Lie|Flirt|Tell Truth", ""]];

var Flirt