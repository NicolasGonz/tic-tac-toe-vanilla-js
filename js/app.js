import { createGrid } from "./helpers/ui.js";
console.log("Bienvenidos al juego")

let playerOne = true

let playerTwo = false

let countSignal = (signal) => {
    let item = document.querySelectorAll("li.item")
    let arrayItems = Array.from(item).filter(item => item.dataset.signal == signal)
    return arrayItems.length 
}

const Rows = 3

const Columns = 3

let grid = []

for (let index = 0; index < Rows; index++) {
    for (let col = 0; col < Columns; col++) {
        const element = [index,col];
        grid.push(element)
    }
}
console.clear()
grid.forEach(element => {
    console.log(element)
});

createGrid(grid, document.body)

let setPlayer = (player) => {
    return player = !player 
}


console.log(setPlayer(playerOne))