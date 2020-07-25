export let createGrid = (grid, container) => {
    let list = document.createElement("ul")
    grid.forEach(items => {
        let element = document.createElement("li")
        element.setAttribute("data-row",items[0])

        element.setAttribute("data-col",items[1])

        list.appendChild(element)
    })

    container.appendChild(list)

    return Array.from(list.children)
}  