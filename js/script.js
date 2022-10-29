document.addEventListener('DOMContentLoaded', () => {

    // opções de cards//
    const cardArray [
        {
            name:'xbox-360',
            img:'.images/mBox_360.png',  
        },
        {
            name:'xbox-360',
            img:'.images/mBox_360.png',  
        },
        {
            name:'xbox-one',
            img:'.images/mBox_one.png',  
        },
        {
            name:'xbox-one',
            img:'.images/mBox_one.png',  
        },
        {
            name:'mega-drive',
            img:'.images/mega-drive.png',  
        },
        {
            name:'mega-drive',
            img:'.images/mega-drive.png',  
        },
        {
            name:'nintendo-64',
            img:'.images/nintendo-64.png',  
        },
        {
            name:'nintendo-64',
            img:'.images/nintendo-64.png',  
        },
        {
            name:'platform-2v3',
            img:'.images/Platform2V3.png',  
        },
        {
            name:'platform-2v3',
            img:'.images/Platform2V3.png',  
        },
        {
            name:'play-system',
            img:'.images/Playsystem.png',  
        },
        {
            name:'play-system',
            img:'.images/Playsystem.png',  
        },
        {
            name:'ps4',
            img:'.images/ps4.png',  
        },
        {
            name:'ps4',
            img:'.images/ps4.png',  
        },
        {
            name:'super-nintendo',
            img:'.images/super-nintendo.png',  
        },
        {
            name:'super-nintendo',
            img:'.images/super-nintendo.png',  
        }

    ]
})

// Criação de Placa //
const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []

function creatBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', '.images/mBox_360.png')
        card.setAttribute('data-id', i)
        // card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('Parábens, você achou o par!')
        cards[optionOneId].setAttribute('src',)
    }
}

// flip you card
function flipCard() {
   var cardId = this.getAttribute ('data-id')
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenId.push(cardId)
   this.setAttribute('src', cardArray[cardId].img)
   if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
   }
}

creatBoard()