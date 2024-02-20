
const suits = ["s", "c", "d", "h"];
const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
let deck = [];
const newHand = document.querySelector(".newHand");
const fold = document.querySelector(".fold");
const call = document.querySelector(".call");
const raise = document.querySelector(".raise");
const x2 = document.querySelector(".x2");
const x3 = document.querySelector(".x3");
const bc1 = document.querySelector(".boardCard1 img");
const bc2 = document.querySelector(".boardCard2 img");
const bc3 = document.querySelector(".boardCard3 img");
const bc4 = document.querySelector(".boardCard4 img");
const bc5 = document.querySelector(".boardCard5 img");
const pCard1 = document.querySelector(".pCard1 img");
const pCard2 = document.querySelector(".pCard2 img");
let potText = document.querySelector(".potValue");
let callClick = 0;
potText.textContent = 150;

let deckNum = 1;


// creating a deck
for (let i = 0; i < deckNum; i++) {
    for(let s = 0; s < suits.length; s++){
        for(let v = 0; v < value.length; v++){
            card = value[v] + suits[s];
            deck.push(card);
        }
    }
    i++
}

function draw(deck) {
    if (deck.length === 0) {
        console.log("The deck is empty.");
        return null;
    }
    const randomIndex = Math.floor(Math.random() * deck.length);
    const selectedCard = deck[randomIndex];
    deck.splice(randomIndex, 1);
    return selectedCard;
}

//console.log(deck);  

if (pCard1) {
    const drawnCard = draw(deck);  
    pCard1.src = "cards/" + drawnCard + ".svg";
    pCard1.style.width = "100%";
    pCard1.style.height = "50px";
    pCard1.alt = drawnCard;
    console.log(drawnCard);
} else {
    console.log("Element with class 'pCard1' not found.");
}

if (pCard2) {
    const drawnCard2 = draw(deck); 
    pCard2.src = "cards/" + drawnCard2 + ".svg";
    pCard2.style.width = "100%";
    pCard2.style.height = "50px";
    pCard2.alt = drawnCard2;
    console.log(drawnCard2);
} else {
    console.log("Element with class 'pCard2' not found.");
}

function reload() {
    location.reload();
}
function folded() {
    if (callClick === 0){
    flop();
    turn();
    river();
    }
    if (callClick === 1){
        turn();
        river();
    }
    if (callClick === 2){
        river();
    }
    console.log("folded");
}

function callIt() {
    if (callClick <= 0){
        flop();   
        potText.textContent = (parseInt(potText.textContent) + 50)
        return
    }
    if (callClick === 1){  
        turn();   
        potText.textContent = (parseInt(potText.textContent) + 50)     
        return
    }
    if (callClick === 2){  
        river();
        potText.textContent = (parseInt(potText.textContent) + 50)
        return
        }        
    }


function flop(){
    const boardcard1 = draw(deck); 
    const boardcard2 = draw(deck); 
    const boardcard3 = draw(deck); 
    callClick = 1; 
   setTimeout(() => {
        bc1.src = "cards/" + boardcard1 + ".svg";
        bc2.src = "cards/" + boardcard2 + ".svg";
        bc3.src = "cards/" + boardcard3 + ".svg";
      }, 1000); 
}
function turn(){
        const boardcard4 = draw(deck);  
        callClick = 2;        
        setTimeout(() => {
        bc4.src = "cards/" + boardcard4 + ".svg";
        }, 1000);                   
}
function river() {
   const boardcard5 = draw(deck);
   callClick = 3; 
   setTimeout(() => {
     bc5.src = "cards/" + boardcard5 + ".svg"; 
  }, 1000); 
}
function raiseEm() {
    console.log("raised");
}

function double() {
    console.log("x2");
}

function triple() {
    console.log("x3");
}
newHand.addEventListener("click", reload);
fold.addEventListener("click", folded);
call.addEventListener("click", callIt);
raise.addEventListener("click", raiseEm);
x2.addEventListener("click", double);
x3.addEventListener("click", triple);
