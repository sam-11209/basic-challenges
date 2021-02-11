//challenge 1:
function getAgeInDays() {
    var ageYear = prompt("Please tell me !!! which year you born");
    let date = new Date();
    let currentYear = date.getFullYear();
    var ageInDays = (currentYear - ageYear) * 365;
    if (ageYear < currentYear && ageYear > currentYear - 100) {
        let h1 = document.createElement('h1');
        let textAns = document.createTextNode("You are " + ageInDays + " days old ");
        h1.setAttribute('id', ageInDays);
        h1.appendChild(textAns);
        document.getElementById('age-return-in-days').appendChild(h1);
        document.getElementById("b1").disabled = true;
    } else {
        let h1 = document.createElement('h1');
        let textAns = document.createTextNode("please enter a valid year");
        h1.setAttribute('id', '123');
        h1.appendChild(textAns);
        document.getElementById('age-return-in-days').appendChild(h1);
        document.getElementById("b1").disabled = true;
    }
}

function reset() {
    // console.log(getAgeInDays);
    if (document.getElementById("b1").disabled === true) {
        document.getElementById('age-return-in-days').textContent = '';
        let audio = new Audio("static/sounds/draww.mp3");
        audio.play();
        document.getElementById("b1").disabled = false;
    }


}


//Challenge 2: image generator
function genMyPic() {
    var img = document.createElement('img');
    var div = document.getElementById('cat-gen');
    let audio = new Audio("static/sounds/swish.m4a");
    let myPicArray = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'];
    let randomInt = Math.floor(Math.random() * 10);
    img.setAttribute('id', 'img1');
    img.setAttribute('src', `static/images/${myPicArray[randomInt]}.jpeg`);
    //OR
    // img.src = "C:/Users/hp/Desktop/pic/1603825629431.jpg";
    //But NOT                 
    // img.append("C:\Users\hp\Desktop\pic\1603825629431.jpg"); // gives things inside <img> things </img> tag 
    div.appendChild(img);
    audio.play();
}

function removePic() {
    // document.getElementById('img1').remove();
    let audio = new Audio("static/sounds/draww.mp3");
    let myPics = document.querySelector('#cat-gen').querySelectorAll('img');
    // console.log(myPics);
    for (let i = 0; i < myPics.length; i++) {
        myPics[i].remove();
    }
    audio.play();

}


//============================================================================================================
//===================================================================================
//=======================================================
//=====================================
//========================
//================
//=======
//==


//Challenge 3: rock, paper,scissors
function rps(inputImage) {
    var humanChoice, botChoice;
    humanChoice = inputImage.id;
    var choices = ['rock', 'paper', 'scissor']

    botChoice = choices[genrateBotChoice()];
    // console.log(humanChoice, botChoice);

    var decission = gameDecider(humanChoice, botChoice);
    // console.log(decission);

    var message = finalMessage(decission);
    //  console.log(message);

    rpsFinal(humanChoice, botChoice, message);

}

function genrateBotChoice() {
    return Math.floor((Math.random()) * 3);
}

//return  0 means human lost and 1 means win and 0.5 means Draw
function gameDecider(humanChoice, botChoice) {
    var dictionary = {
            'rock': {
                'rock': 0.5,
                'paper': 1,
                'scissor': 0
            },
            'paper': {
                'paper': 0.5,
                'scissor': 1,
                'rock': 0
            },
            'scissor': {
                'scissor': 0.5,
                'rock': 1,
                'paper': 0
            }
        }
        //return dictionary.rock.paper;
    return dictionary[botChoice][humanChoice];
}

function finalMessage(decission) {
    if (decission === 1) return {
        'message': 'You win',
        'color': 'green'
    }
    else if (decission === 0.5) return {
        'message': 'Game Drwan',
        'color': 'yellow'
    }
    else if (decission === 0) return {
        'message': 'You lost',
        'color': 'red'
    }
}

function rpsFinal(humanChoice, botChoice, message) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var flexBoxDiv = document.getElementById('flexBox-3');
    var humanDiv = document.createElement('div');
    var msgDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    //humanDiv.innerHTML = "<img src='" + imageDataBase[humanChoice] + "'>";
    humanDiv.innerHTML = "<img src='" + imageDataBase[humanChoice] + "' height=150 width=150 style='box-shadow : 0px 10px 50px rgba(37,50,233,1);'>"
    msgDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px;'>" + message['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDataBase[botChoice] + "' height=150 width=150 style='box-shadow : 0px 10px 50px rgba(37,50,233,1);'>"

    flexBoxDiv.appendChild(humanDiv);
    flexBoxDiv.appendChild(msgDiv);
    flexBoxDiv.appendChild(botDiv);
}

//============================================================================================================
//===================================================================================
//=======================================================
//=====================================
//========================
//================
//=======
//==

//Challenge 4: Change Color of revery button on page

var allButtons = document.getElementsByTagName('button');
//console.log("allButttons  :" + allButtons);
//console.log("allButttons length :" + allButtons.length);
var orignalButtonColor = [];
for (var m = 0; m < allButtons.length; m++) {
    orignalButtonColor.push(allButtons[m].classList[1]);
}
//console.log('orignalButtonColor: ' + orignalButtonColor);
//console.log('orignalButtonColor length: ' + orignalButtonColor.length);

function changeColor(currentRef) {
    if (currentRef.value === 'red') {
        buttonRed();
    } else if (currentRef.value === 'green') {
        buttonGreen();
    } else if (currentRef.value === 'reset') {
        buttonReset();
    } else if (currentRef.value === 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(orignalButtonColor[i]);
    }
}

function buttonRandom() {
    var colorArray = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];
    for (let i = 0; i < allButtons.length; i++) {
        var random = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(colorArray[random]);
    }
}

//============================================================================================================
//==========================      CHALLENFGE:5   ========================================================
//=======================================================
//=====================================
//========================
//================
//=======
//==


//Challenge 5:  Blackjack challenge
let blackjack = {
    'you': { div: '#myBlock', 'scoreSpan': '#myBlockSpan', 'score': 0 },
    bot: { 'div': '#botBlock', 'scoreSpan': '#botBlockSpan', 'score': 0 },
    cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'],
    cardScore: { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'K': 10, 'Q': 10, 'A': [1, 10] },
    wins: 0,
    losses: 0,
    draws: 0,
    isStand: false,
    turnOver: false,
    trackStand: false,
    trackHit: false,
}

//remember u can create object with bot or 'bot' but when u want to acess it in const BOT u need to pass that
//in array with 'bot' (means that single '' is necessary)
const YOU = blackjack['you'];
const BOT = blackjack['bot'];

const hitSound = new Audio('static/sounds/swish.m4a');
const lossSound = new Audio('static/sounds/aww.mp3');
const winSound = new Audio('static/sounds/cash.mp3');
const drawSound = new Audio('static/sounds/draww.mp3');

document.querySelector('#blackjack_hit').addEventListener('click', blackjackHit);
document.querySelector('#blackjack_stand').addEventListener('click', blackjackHitByBot);
document.querySelector('#blackjack_deal').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjack['isStand'] === false && YOU['score'] < 21) {
        let card = randomCardPicker();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        blackjack['trackHit'] = true;
    }
}

//understand this function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//use async here
async function blackjackHitByBot() {
    if (blackjack['trackStand'] === false && blackjack['trackHit'] === true) {

        blackjack['isStand'] = true;

        while (BOT['score'] < 16 && blackjack['isStand'] === true) {
            let card = randomCardPicker();
            showCard(card, BOT);
            updateScore(card, BOT);
            showScore(BOT);
            await sleep(1000);
        }

        blackjack['turnOver'] = true;
        let win = computeWinner();
        showResult(win);
        blackjack['trackStand'] = true;
        // console.log("trackStand : " + blackjack['trackStand'])
    }
}

function blackjackDeal() {
    if (blackjack['turnOver'] === true) {

        blackjack['isStand'] = false;
        let mySectionImages = document.querySelector(YOU['div']).querySelectorAll('img');
        for (let i = 0; i < mySectionImages.length; i++) {
            mySectionImages[i].remove();
        }
        let botSectionImages = document.querySelector(BOT['div']).querySelectorAll('img');
        for (let i = 0; i < botSectionImages.length; i++) {
            botSectionImages[i].remove();
        }
        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(YOU['scoreSpan']).style.color = 'black';
        document.querySelector(BOT['scoreSpan']).textContent = 0;
        document.querySelector(BOT['scoreSpan']).style.color = 'black';

        YOU['score'] = 0;
        BOT['score'] = 0;

        document.querySelector('#play').textContent = "Let's play";
        document.querySelector('#play').style.color = 'black';
        document.querySelector('#play').style.fontSize = "1.75rem";

        blackjack['turnOver'] = false;
        blackjack['trackStand'] = false;
        blackjack['trackHit'] = false;

        drawSound.play();
    }
}

//While accesssing elements from array you can acces  it with cards[2] or cards['2']
//both will be right
function randomCardPicker() {
    return blackjack['cards'][Math.floor(Math.random() * 13)];
}

function showCard(card, activePlayer) {
    let cardImage = document.createElement('img');
    //Focus on this hoe we pass variable inside image to select random image
    cardImage.src = `C:/Users/hp/Documents/JS project1/static/images/${card}.jpg`;
    document.querySelector(activePlayer['div']).append(cardImage);
    hitSound.play();
}

function updateScore(card, activePlayer) {
    let currentScore = activePlayer['score'];
    if (card === 'A') {
        if (currentScore + blackjack['cardScore'][card][1] > 21) {
            activePlayer['score'] = currentScore + blackjack['cardScore'][card][0];
        } else {
            activePlayer['score'] = currentScore + blackjack['cardScore'][card][1];
        }

    } else {
        activePlayer['score'] += blackjack['cardScore'][card];
    }
    // console.log("Score : " + activePlayer['score']);

}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'blue'
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        document.querySelector(activePlayer['scoreSpan']).style.color = 'green';
    }
}

function computeWinner() {
    let winner;
    if (blackjack['trackStand'] === false) {

        if (YOU['score'] <= 21) {

            if (YOU['score'] > BOT['score'] || BOT['score'] > 21) {
                // console.log('You Win!!!!!');
                blackjack['wins']++;
                winner = YOU;

            } else if (YOU['score'] < BOT['score']) {
                //console.log('You lost !!');
                blackjack['losses']++;
                winner = BOT;

            } else if (YOU['score'] === BOT['score']) {
                //console.log('drew');
                blackjack['draws']++;
            }

        } else if (YOU['score'] > 21 && BOT['score'] < 21) {
            //console.log('You lost');
            blackjack['losses']++;
            winner = BOT;

        } else if (YOU['score'] > 21 && BOT['score'] > 21) {
            //console.log('drew !!');
            blackjack['draws']++;
        }
    }
    //console.log(winner);
    return winner;
}

function showResult(winner) {

    if (blackjack['turnOver'] === true && blackjack['trackStand'] === false) {

        let msg, msgColor;
        if (winner === YOU) {
            document.querySelector('#win').textContent = blackjack['wins'];
            msg = 'You Won !!';
            msgColor = 'green';
            winSound.play();

        } else if (winner === BOT) {
            document.querySelector('#loss').textContent = blackjack['losses'];
            msg = 'You Lost !!';
            msgColor = 'red';
            lossSound.play();

        } else {
            document.querySelector('#draw').textContent = blackjack['draws'];
            msg = 'You Drew!!';
            msgColor = 'blue';
            drawSound.play();
        }
        document.querySelector('#play').textContent = msg;
        document.querySelector('#play').style.color = msgColor;
        document.querySelector('#play').style.fontSize = "80px";
    }
}