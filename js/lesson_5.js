//переменные для шахмат
let selectShah = document.querySelector(".shah")
let table = []
let stringTable = null
let arrN = ["A", "B", "C", "D", "E", "F", "G", "H"]
let toggle = document.querySelector("#toggle-1")
//переменные для корзины
let selectCart = document.querySelector(".cart")
let cart = [{
        id: 1234,
        titlte: "Свитер",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure. Animi tempore quo, reiciendis beatae officia repellat labore.",
        character: {
            type: "Вязаный",
            size: 32
        },
        count: 2
    }, {
        id: 4234,
        titlte: "Джемпер",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure. Animi tempore quo, reiciendis beatae officia repellat labore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure. Animi tempore quo, reiciendis beatae officia repellat labore.",
        character: {
            type: "Шерстяной",
            size: 45
        },
        count: 1
    },
    {
        id: 4563,
        titlte: "Куртка",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure.",
        character: {
            type: "Синтетика",
            size: 41
        },
        count: 1
    }
]

function shahmat() {
    for (let i = 0; i <= 9; i++) {
        table.push(document.createElement("tr"))
        for (let a = 0; a <= 9; a++) {
            stringTable = document.createElement("td")
            table[i].append(stringTable)
            if (i === 0 || i === 9) {
                if (a !== 0 || a !== 9) {
                    stringTable.style.border = "none"
                    stringTable.style.color = 'black'
                    stringTable.textContent = arrN[a - 1]
                } else {
                    stringTable.style.border = "none"
                }
            }
            if (i !== 0 && i !== 9) {
                if (a === 0 || a === 9) {
                    stringTable.style.border = "none"
                    stringTable.textContent = 9 - i
                }
            } else {
                stringTable.style.border = "none"
            }
            if ((i !== 0 && i !== 9) && (a !== 0 && a !== 9)) {
                if (i % 2 !== 0) {
                    if (a % 2 == 0) {
                        stringTable.style.backgroundColor = "black"
                    }
                } else {
                    if (a % 2 !== 0) {
                        stringTable.style.backgroundColor = "black"
                    }
                }


            }
        }

    }

    creatTable = document.createElement("table")
    creatTable.setAttribute("border", '1px')
    for (element of table) {
        creatTable.append(element)
    }
    selectShah.append(creatTable)
}

function togCont() {
    if (!toggle.checked) {
        selectCart.style.display = "none"
        selectShah.style.display = "block"
    } else {
        selectShah.style.display = "none"
        selectCart.style.display = "flex"
        cartGen()
    }
}

function cartGen() {
    for (let l = 0; l < cart.length; l++) {
        element = cart[l]
        count = document.createElement("span") //по хорошему тут надо input рядом -+ но времени нет!
        count.textContent = "Кол-во: " + element.count
        count.className = "car-count"
        character = document.createElement("div")
        characterType = document.createElement('span')
        characterType.textContent = "Тип: " + element.character.type
        character.append(characterType)
        characterSize = document.createElement('span')
        characterSize.textContent = "Размер: " + element.character.size
        character.append(characterSize)
        character.className = "car-character"
        description = document.createElement("span")
        description.textContent = "Описание: " + element.description
        description.className = "car-description"
        imgElement = document.createElement('img')
        imgElement.setAttribute("src", element.imgUrl)
        titlteElement = document.createElement("span")
        titlteElement.textContent = element.titlte
        titlteElement.className = "car-title"
        cartProduct = document.createElement("div")
        cartProduct.append(titlteElement)
        cartProduct.append(imgElement)
        cartProduct.append(description)
        cartProduct.append(character)
        cartProduct.append(count)
        cartProduct.className = "cart-product"
        selectCart.append(cartProduct)

    }
}


window.onload = shahmat()
toggle.addEventListener('change', togCont)