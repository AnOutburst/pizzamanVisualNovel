
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
        buttomPromps = currentArr[currentIndex][1].split('|');
        choice1.innerText = buttomPromps[0];
        choice2.innerText = buttomPromps[1];
        if (choices.length == 3){
            choice3.style.display = "block";
            choice3.innerText = buttomPromps[2];
        }
        else{
            choice3.style.display = "none";
        }
    } else {
        options.style.display = "none";
        dialog.style.display = "block";
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
    currentIndex = 0;
    currentArr = eval(choices[path]);
    console.log(currentArr);
    options.style.display = "none";
    dialog.style.display = "block";
    choices = [];
    progressText();
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
            pizzaMan.src = "./assets/man/pizzaSus.png";
            break;
        case "wow":
            pizzaMan.src = "./assets/man/pizzaNeutral.png";
            break;
        case "annoyed":
            pizzaMan.src = "./assets/man/pizzaAnnoyedSimple.png";
            break;
        case "disgusted":
            pizzaMan.src = "./assets/man/pizzaDisgusted.png";
            break;
        case "leer":
            pizzaMan.src = "./assets/man/pizzaLeer.png";
            break;
        case "sad":
            pizzaMan.src = "./assets/man/pizzaSad.png"
            break;
        case "angry":
            pizzaMan.src = "./assets/man/pizzaAngry.png"
            break;
        default:
            pizzaMan.src = "./assets/man/pizzaNeutral.png";
            break;
    }

}




var intro = [["It's another tuesday night home alone. Earlier you ordered pizza, though it has yet to arrive.", ""],
["*ding dong*\nThat must be it now.", ""]
    , ["'Hello, that'll be 19.53'", "avatar(neutral)"]
    , ["Smiling, you quickly realize somethong is wrong as you go for your wallet...", ""]
    , ["You don't have your wallet! you quickly realize you must find a way out of this!", ""]
    , ["Lie|Flirt|Truth", "Lie|Flirt|Tell Truth"]];

var Flirt = [["'Hey there good looking, I may have misplaced my money, but I can do you one better.", ""]
    , ["Are...Are you trying to seduce me?", "avatar(disgusted)"]
    , ["Okay, first of all, I could get fired.", "avatar(annoyed)"]
    , ["Second of all, how do you know what I want in a relationship", "avatar(sus)"]
    , ["I actually went through some stuff recently and I don't think I'm ready for another relationship", "avatar(sad)"]
    , ["*It's clear to you that He's hurting right now. \nWill you continue to pursue him as is, or attempt to empathize?*",""]
    , ["FlirtPursue|FlirtEmpathize","Pursue Flirtation|Empathize with him"]
];

var FlirtPursue = [["'Hey baby don't you be like that. You just need a bit of loving to make things better.",""]
    ,["Oh you know what man? Screw you! Not only are you pushy and bad at ordering pizza, your empathy skills are wack!", "avatar(angry)"]
    

];

var Truth = [["'Man, I gotta be honest with you. I have no money on me.", ""]
    , ["Jesus christ really? How stupid do you have to be to buy a pizza you cant pay for?!", "avatar(annoyed)"]
    , ["I had to drive all this way for nothing!", "avatar(angry)"]
    , ["You realize I'm not getting payed for this right.", "avatar(leer)"]
    , ["*you feel bad for the guy, but he is being awfully rude right now. Do you want to try to apologize or get angry at him", ""]
    , ["truthApology|genericAngry","Apologize to him|Get angry at him"]
];
var Lie = [["'Hey there good looking, I may have misplaced my money, but I can do you one better.", ""]
    , ["Are...Are you trying to seduce me?", "avatar(disgusted)"]
    , ["Okay, first of all, I could get fired.", "avatar(annoyed)"]
    , ["Second of all, how do you know what I want in a relationship", "avatar(sus)"]
    , ["I actually went through some stuff recently and I don't think I'm ready for another relationship", "avatar(sad)"]
    , ["It's clear to you that He's hurting right now. \nWill you continue to pursue him as is, or attempt to empathize?",""]
    , ["Pursue|Empathize",""]
];
