
const suits = ["s", "c", "d", "h"];
const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
let deck = [];

for(let s = 0; s < suits.length; s++){
    for(let v = 0; v < value.length; v++){
        card = value[v] + suits[s];
        deck.push(card);
    }
}


function draw(deck) {
    if (deck.length === 0) {
        console.log("The deck is empty.");
        return null;
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const selectedCard = deck[randomIndex];

    // Uncomment the line below if you want to remove the card from the deck
     deck.splice(randomIndex, 1);

    return selectedCard;
}


console.log(deck);  
const pCard1 = document.querySelector(".pCard1 img");
const pCard2 = document.querySelector(".pCard2 img");
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

