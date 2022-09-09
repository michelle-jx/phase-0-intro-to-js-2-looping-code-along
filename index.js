// Code your solutions in this file
let names = []
let event = []

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
console.log(messages)

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber--
    }
    console.log(startingNumber)
}

console.log(1 + 2 + "kittens")

