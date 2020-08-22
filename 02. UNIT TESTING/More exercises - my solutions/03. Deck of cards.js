function printDeckOfCards(cards) {
    function makeCards(inputFace, inputSuit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (!faces.includes(inputFace)) {
            let err=new Error('Invalid card face!')
            err.card=inputFace+inputSuit;
            throw err;
        }
        if (!suits[inputSuit]) {
            let err=new Error('Invalid card face!')
            err.card=inputFace+inputSuit;
            throw err;
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

    try {
        let resultCards = cards.map(x=>{
            let cardFace=x.split('');
            let cardSuit=cardFace.pop();
            return makeCards(cardFace.join(''),cardSuit)        
        })
        console.log(resultCards.join(' '));
    } catch (error){
        console.log(`Invalid card: ${error.card}`);
    }
}
printDeckOfCards(['5S', '3D', 'QD', '2S']);