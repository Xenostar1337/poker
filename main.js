
const suits = ["s", "c", "d", "h"];
const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
let deck = [];
const newHand = document.querySelector(".restart");
const fold = document.querySelector(".fold");
const call = document.querySelector(".call");
const raise = document.querySelector(".raise");
const newGame = document.querySelector(".newGame");
const bc1 = document.querySelector(".boardCard1 img");
const bc2 = document.querySelector(".boardCard2 img");
const bc3 = document.querySelector(".boardCard3 img");
const bc4 = document.querySelector(".boardCard4 img");
const bc5 = document.querySelector(".boardCard5 img");
const tl1 = document.querySelector(".tl1 img");
const tl2 = document.querySelector(".tl2 img");
const cen1 = document.querySelector(".cen1 img");
const cen2 = document.querySelector(".cen2 img");
const tr1 = document.querySelector(".tr1 img");
const tr2 = document.querySelector(".tr2 img");
const l1 = document.querySelector(".l1 img");
const l2 = document.querySelector(".l2 img");
const r1 = document.querySelector(".r1 img");
const r2 = document.querySelector(".r2 img");
const ll1 = document.querySelector(".ll1 img");
const ll2 = document.querySelector(".ll2 img");
const lr1 = document.querySelector(".lr1 img");
const lr2 = document.querySelector(".lr2 img");


const pCard1 = document.querySelector(".pCard1 img");
const pCard2 = document.querySelector(".pCard2 img");
let potText = document.querySelector(".potValue");
let balanceText = document.querySelector(".balance");
let callClick = 0;
potText.textContent = 150;
let deckNum = 1;

function newDeck(){                                      //create a deck
    for (let i = 0; i < deckNum; i++) {
        for(let s = 0; s < suits.length; s++){
            for(let v = 0; v < value.length; v++){
                card = value[v] + suits[s];
                deck.push(card);
            }
        }
        i++
    }    
}
function draw(deck) {                                   //draw random card from deck, remove it from deck array.
    if (deck.length === 0) {
        console.log("The deck is empty.");
        return null;
    }
    const randomIndex = Math.floor(Math.random() * deck.length);
    const selectedCard = deck[randomIndex];
    deck.splice(randomIndex, 1);
    return selectedCard;
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
        balanceText.textContent = (parseInt(balanceText.textContent) - 100)
        potText.textContent = (parseInt(potText.textContent) + 650) 
        return
    }
    if (callClick === 1){  
        turn();   
        potText.textContent = (parseInt(potText.textContent) + 700)
        balanceText.textContent = (parseInt(balanceText.textContent) - 100)     
        return
    }
    if (callClick === 2){  
        river();
        potText.textContent = (parseInt(potText.textContent) + 800) 
        balanceText.textContent = (parseInt(balanceText.textContent) - 100)
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
   callClick = 3; 
   
   setTimeout(() => {
     bc5.src = "cards/" + draw(deck) + ".svg"; 
     tl1.src = "cards/" + draw(deck) + ".svg";
     tl2.src = "cards/" + draw(deck) + ".svg";
     cen1.src = "cards/" + draw(deck) + ".svg";
     cen2.src = "cards/" + draw(deck) + ".svg";
     tr1.src = "cards/" + draw(deck) + ".svg";
     tr2.src = "cards/" + draw(deck) + ".svg";
     l1.src = "cards/" + draw(deck) + ".svg";
     l2.src = "cards/" + draw(deck) + ".svg";
     r1.src = "cards/" + draw(deck) + ".svg";
     r2.src = "cards/" + draw(deck) + ".svg";
     ll1.src = "cards/" + draw(deck) + ".svg";
     ll2.src = "cards/" + draw(deck) + ".svg";
     lr1.src = "cards/" + draw(deck) + ".svg";
     lr2.src = "cards/" + draw(deck) + ".svg";
  }, 1000); 
}
function raiseEm() {
    console.log("raised");
}
function newRound(){
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
    console.log("new game!");
    callClick = 0;
    bc1.src = "back.jpg";
    bc2.src = "back.jpg";
    bc3.src = "back.jpg";
    bc4.src = "back.jpg";
    bc5.src = "back.jpg";
    tl1.src = "back.jpg";
     tl2.src = "back.jpg";
     cen1.src = "back.jpg";
     cen2.src = "back.jpg";
     tr1.src = "back.jpg";
     tr2.src = "back.jpg";
     l1.src = "back.jpg";
     l2.src = "back.jpg";
     r1.src = "back.jpg";
     r2.src = "back.jpg";
     ll1.src = "back.jpg";
     ll2.src = "back.jpg";
     lr1.src = "back.jpg";
     lr2.src = "back.jpg";
    potText.textContent = 150;
    newDeck();
}

newDeck();
newRound();

newGame.addEventListener("click", newRound);
newHand.addEventListener("click", reload);
fold.addEventListener("click", folded);  
call.addEventListener("click", callIt);
//raise.addEventListener("click", raiseEm);

