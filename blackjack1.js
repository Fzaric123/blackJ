
let cards=[]
let sum = 0
let isAlive= false
let hasBlackJack=false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let player = {
    name: "Filip",
    money: 150
}
let prizeEl= document.getElementById("prize")
prizeEl.textContent= player.name + ": " + player.money + "$"
function getRandomCard(){
let = randombroj=Math.floor(Math.random()*13)+1
    if(randombroj==1){
        return 11
    }
    else if(randombroj>9){
        return 10
    }
    else {
        return randombroj
    }

}

function startgame(){
    let isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards= [firstCard, secondCard]
     sum = firstCard + secondCard
    renderGame()
    
}
function renderGame(){
    
    sumEL.textContent= "Sum: " + sum
    cardEl.textContent = "Cards:"
    for(i=0;i<cards.length;i++){
        cardEl.textContent += " " + cards[i] + " "
    }
    if(sum<=20){
        message="Do you wanna take new card"
    isAlive=true
    }
    else if(sum===21){
        message="You got blackjack"
        hasBlackJack=true
    }
    else{
        message="you are out of the game"
        isAlive=false
    }
    messageEl.textContent = message
    
}
function newCard(){
    if(hasBlackJack===false && isAlive===true){
    let card= getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()

}}
/*function getRandomCard(){
let = randombroj=Math.floor(Math.random()*13)+1
    if(randombroj==1){
        return 11
    }
    else if(randombroj>9){
        return 10
    }
    else {
        return randombroj
    }

}


/*let prvibroj=5
let drugi=false
let prviarayy=[prvibroj, "druga sansa", drugi]
console.log(prviarayy[2])*/
/*let mesagges = ["Hey whatss up", "Nothing you", "Same"]
mesagges.push("Bored in the house")
console.log(mesagges)
mesagges.pop()
console.log(mesagges)*/
/*let mesagges = ["Hey whatss up", 
"Nothing you", 
"Same"]
for(i=0;i<messages.length;i+=1){
    console.log(mesagges[i])
}*/
/*let time1=15
let time2=19
function totalTime(){
return time1+time2
}
let total=totalTime()
console.log(total)*/
/*let randomNumber = Math.random()
console.log(randomNumber)*/
/*let castle = {
    isReserved: true,
    name: "Petrovaradin",
    size: 4000,
    parts: ["DonjaPalata", "GornjaPalata"]

}
console.log(castle.isReserved)*/
/*let person = {
    name: "Filip",
    age: 20,
    contry: "Serbia"

}
function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.contry) 
}*/
/*let largeCountries=["China", "India", "Indonesia", "Pakistan", "USA"]
console.log("Top 5 countries in the world")
for(i=0;i<5;i++){
    console.log("-"+ largeCountries[i])
}*/
/*let largeCountries=["Tuvalu", "India", "Indonesia", "Pakistan", "Monaco"]
largeCountries.pop("Monaco")
largeCountries.shift("Tuvalu")
largeCountries.unshift("China")
largeCountries.push("USA")
console.log(largeCountries)*/
/*let day="friday"
let date=13
if(day==="friday"&&date===13){
    console.log("spooky")
}*/
/*let hands=["rocks", "paper", "scissors"]
function randomr(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]    
}
console.log(randomr())*/
