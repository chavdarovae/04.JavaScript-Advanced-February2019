function makeCards(inputFace, inputSuit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    if(!faces.includes(inputFace)){
        throw new Error ('Invalid card face!')
    }
    if(!suits[inputSuit]){
        throw new Error ('Invalid card face!')
    }

    let card = {
        face: inputFace,
        suit: suits[inputSuit],
        toString: function () {
            return this.face + this.suit
        }
    };
    
    return card;
}

let card= makeCards('A', 'S');
console.log(''+card);