//let firstcard = getrandomcardnumber()
//let secondcard = getrandomcardnumber()


let sum = 0    //firstcard + secondcard
let cards = []      //[firstcard, secondcard]
message = ""
let isalive = false
let hasblackjack = false


let messageel = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el")

let player = {

    name: "anandhu",
    chips: 145

}


let playel = document.getElementById("play-el")
playel.textContent = player.name + " : $" + player.chips

function getrandomcardnumber() {
    let randomnumber = Math.floor(Math.random() * 13) + 1
    return randomnumber

}


function rendergame() {
    cardsel.textContent = "cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsel.textContent += cards[i] + " "

    }

    sumel.textContent = "sum:" + sum

    if (sum <= 20) {
        message = "do you want to draw new card"
        messageel.textContent = message
        hasblackjack = false
    }
    else if (sum === 21) {
        message = "woohoo you got blackjacks"
        messageel.textContent = message
    }
    else if (sum > 21) {
        message = "loser"
        messageel.textContent = message
    }

}


function startgame() {

    let firstrandom = getrandomcardnumber()
    let secondrandom = getrandomcardnumber()
    cards = [firstrandom, secondrandom]
    sum = firstrandom + secondrandom
    isalive = true
    rendergame()
}


function newcard() {
    if (isalive === true && hasblackjack === false) {
        let card = getrandomcardnumber()
        cards.push(card)
        sum = sum + card
        console.log(cards)
        rendergame()

    }

    startgame()

}
function restart() {
    if (sum > 21) {


    }
}




