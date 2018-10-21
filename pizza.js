
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
var endPic;

function live() {
    currentArr = intro;
    currentIndex = 0;
    endPic = document.getElementById("endPic");
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
    try {
        if (currentIndex == currentArr.length - 1) {
            if (currentArr[currentIndex][0].includes('ending')) {
                showEnd(currentArr[currentIndex][0].substring(6, currentArr[currentIndex][0].length));
            } else {
                dialog.style.display = "none";
                dialog.innerHTML = "";
                options.style.display = "block";
                choices = currentArr[currentIndex][0].split('|');
                buttomPromps = currentArr[currentIndex][1].split('|');
                choice1.innerText = buttomPromps[0];
                choice2.innerText = buttomPromps[1];
                if (choices.length == 3) {
                    choice3.style.display = "block";
                    choice3.innerText = buttomPromps[2];
                }
                else {
                    choice3.style.display = "none";
                }
            }
        } else {
            options.style.display = "none";
            dialog.style.display = "block";
            let words = currentArr[currentIndex][0];
            dialog.innerHTML = words;
            if (currentArr[currentIndex][1].includes("avatar")) {
                let avatarName = currentArr[currentIndex][1].substring(7, currentArr[currentIndex][1].length - 1);
                avatar(avatarName);
            }
            currentIndex++
        }
    }
    catch (e) {
        console.log(e);
    }
}

function showEnd(endingImg) {
    pizzaMan.src="";
    textbox.style.display = "none";
    dialog.style.display = "none";
    options.style.display = "none";
    switch (endingImg) {
        case 'Punch':
            endPic.src = "./assets/endings/punch.png";
            break;
        case 'Leave':
            endPic.src = "./assets/endings/leave.png";
            break;
        case 'Together':
            endPic.src = "./assets/endings/together.png";
            break;
        case 'Angry':
            endPic.src = "./assets/endings/angry.png";
            break;
        /* case 'Marriage':
             endPic.src = "./assets/endings/marriage.png";
             break;*/
        default:
            endPic.src = "./assets/endings/generic.png";
            break;
    }
}

function switchPath(path) {
    currentIndex = 0;
    currentArr = eval(choices[path]);
    options.style.display = "none";
    dialog.style.display = "block";
    choices = [];
    progressText();
}

function avatar(avNum) {
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
        case "none":
            pizzaMan.src = ""
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
    , ["*It's clear to you that He's hurting right now. \nWill you continue to pursue him as is, or attempt to empathize?*", ""]
    , ["FlirtPursue|FlirtEmpathize", "Pursue Flirtation|Empathize with him"]
];

var FlirtPursue = [["'Hey baby don't you be like that. You just need a bit of loving to make things better.", ""]
    , ["Oh you know what man? Screw you! Not only are you pushy and bad at ordering pizza, your empathy skills are wack!", "avatar(angry)"]
    , ["You know what, I'm leaving. Screw you and your pizza!", ""]
    , ["The delivery man storms out angrily, throwing the pizza on the floor as he leaves.", "avatar(none)"]
    , ["endingAngry", ""]
];

var FlirtEmpathize = [["'Hey man, I know how it feels be in that situation...'", ""]
    , ["*You proceed to have a lengthy, emotional conversation. One hour later:*", "avatar(none)"]
    , ["You know, now that im a better place, you're seem really nice. Would you like to go see a movie sometime?...", "avatar(blush)"]
    , ["*Years of romance later...*", "avatar(none)"]
    , ["endingMarriage", ""]
];

var Truth = [["'Man, I gotta be honest with you. I have no money on me.", ""]
    , ["Jesus christ really? How stupid do you have to be to buy a pizza you cant pay for?!", "avatar(annoyed)"]
    , ["I had to drive all this way for nothing!", "avatar(angry)"]
    , ["You realize I'm not getting payed for this right.", "avatar(leer)"]
    , ["*you feel bad for the guy, but he is being awfully rude right now. Do you want to try to apologize or get angry at him", ""]
    , ["truthApology|genericAngry", "Apologize to him|Get angry at him"]
];

var truthApology = [["*You apologize profusely, making sure to state you know where his anger is coming from*", "avatar(sad)"]  
    , ["Im sorry man. I'll just go now. The pizza is on me.", ""]
    , ["As he begins to walk off, you find yourself still feeling bad. Should you stop him and try to console him or let him go?", ""]
    , ["letGo|truthConsole", "Let him go|Console Him"]
];

var letGo = [["*You simply watch as he walks off again. You hope he'll be okay", "avatar(none)"]
    , ["endingLeave", ""]
];

var truthConsole = [["'Wait, ' you exclaim, putting your hand on his shoulder. You proceed to have a long session of emotional support over pizza, and end up making a new friend.",""]
    ,["endingTogether", ""]
];
var genericAngry = [["'You know what screw you dude' you exclaim, locking yourself into an argument for the next 20 minutes that", "avatar(angry)"]
    , ["*As the argument ends the delivery man storms out angrily, throwing the pizza on the floor as he leaves. what a waste of time. and pizza.*", "avatar(none)"]
    , ["endingAngry", ""]
];
var Lie = [["'Hey man, my money is in my other pair of pants. Why dont you give me the pizza and I can go grab it.'", ""]
    , ["*Immediately, he sees through it*", "avatar(annoyed)"]
    , ["I hear this crap atleast ten times a day dude. Are you gonna pay or what?", ""]
    , ["*You find yourself with 3 options: Waste his time until he just leaves, verbally berate him, or assault him and steal the pizza", ""]
    , ["waste|genericAngry|assault", "Waste his time|Berate him|Assault him"]
];

var waste = [["*you proceed to spend two hours dodging his questions by reciting several hundred digits of pi.*", ""]
    , ["Oh my god, fine! Just take the pizza dude! Just please, stop the nonrepeating numbers!", "avatar(angry)"]
    , ["*he drops the pizza at your feet and runs away. You've won . . . but at what cost?", "avatar(none)"]
    , ["endingLeave", ""]
];

var assault = [["*You decide to try to suprise him and punch him. This immediately fails, as he dodges, and returns a punch of his own. This is gonna hurt.*", "avatar(none)"]
    , ["endingPunch", ""]
];


