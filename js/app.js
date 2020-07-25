import { createGrid } from "./helpers/ui.js";
console.log("Bienvenidos al juego")

let playerOne = true


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


let items = createGrid(grid, document.body)

items.forEach(item => {
    item.addEventListener("click",function (e) {
        e.preventDefault()
        console.log(playerOne)
        if(playerOne){
            playerOne = false
            e.currentTarget.classList.add("circle")
            e.currentTarget.setAttribute("data-signal","circle")
        }else{
            e.currentTarget.classList.add("cross")
            e.currentTarget.setAttribute("data-signal","cross")
            playerOne = true
        }
    })
})

