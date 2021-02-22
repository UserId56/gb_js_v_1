//переменные для корзины
let selectCart = document.querySelector(".cart")
let selectCartClick = document.querySelector(".cart-icon")
selectCartClick.addEventListener("click", openCart)
let selectCartCount = document.querySelector(".count-product")
let selectShop = document.querySelector(".shop")
let cart = [{
        id: 1234,
        titlte: "Свитер",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure. Animi tempore quo, reiciendis beatae officia repellat labore.",
        character: {
            type: "Вязаный",
            size: 32
        },
        price: 1500,
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
        price: 6100,
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
        price: 3560,
        count: 1
    }
]
let product = [{
        id: 1234,
        titlte: "Свитер",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure. Animi tempore quo, reiciendis beatae officia repellat labore.",
        character: {
            type: "Вязаный",
            size: 32
        },
        price: 1500,
        count: null
    }, {
        id: 4234,
        titlte: "Джемпер",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure. Animi tempore quo, reiciendis beatae officia repellat labore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure. Animi tempore quo, reiciendis beatae officia repellat labore.",
        character: {
            type: "Шерстяной",
            size: 45
        },
        price: 6100,
        count: null
    }, {
        id: 4563,
        titlte: "Куртка",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure.",
        character: {
            type: "Синтетика",
            size: 49
        },
        price: 3560,
        count: null
    },
    {
        id: 87542,
        titlte: "Кросовки",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure.",
        character: {
            type: "Обувь",
            size: 41
        },
        price: 7560,
        count: null
    },
    {
        id: 23489,
        titlte: "Носки",
        imgUrl: "img/fdf22.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tenetur ducimus praesentium voluptas adipisci iure.",
        character: {
            type: "Хлопок",
            size: 41
        },
        price: 150,
        count: null
    }
]

function cartGen() {
    for (let l = 0; l < cart.length; l++) {
        element = cart[l]
        price = document.createElement("span")
        price.textContent = `Цена товара: ${element.price}`
        summer = document.createElement("span")
        summer.textContent = `Итого: ${element.price * element.count}`
        sumPrice = document.createElement("div")
        sumPrice.className = "car-price"
        sumPrice.append(price)
        sumPrice.append(summer)
        count = document.createElement("span") //по хорошему тут надо input рядом -+ но времени нет!
        count.textContent = "Кол-во: " + element.count
        count.className = "car-count"
        cartSum = document.createElement("div")
        cartSum.className = "car-sumer"
        cartSum.append(count)
        cartSum.append(sumPrice)
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
        cartProduct.append(cartSum)
        cartProduct.className = "cart-product"
        cartProduct.dataset.id = element.id
        selectCart.append(cartProduct)

    }
}

function shopGen() {
    for (let k = 0; k < product.length; k++) {
        element = product[k]
        addCart = document.createElement("div")
        addCart.className = "add-cart"
        addCart.textContent = "Добавить в корзину"
        addCart.addEventListener('click', addProduct)
        addCart.dataset.id = element.id
        price = document.createElement("span")
        price.textContent = `Цена товара: ${element.price}`
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
        cartProduct.append(price)
        cartProduct.append(addCart)
        cartProduct.className = "cart-product"
        selectShop.append(cartProduct)

    }
}

function findId(arrObj, idElement) {
    return findObject = arrObj.findIndex(element => element.id == idElement)
}

function addProduct() {
    idElement = this.dataset.id
    if (findId(cart, idElement) == -1) {
        cart.push(product[findId(product, idElement)])
        cart[cart.length - 1].count = 1
        cartCount()
    } else {
        cart[findId(cart, idElement)].count += 1
    }
}

function cartCount() {
    if (cart) {
        selectCartCount.style.display = "block"
        selectCartCount.textContent = cart.length
    }
}

function openCart() {
    selectCart.classList.toggle("cart-open")
    let arrClass = selectCart.classList
    let logicGen = true
    arrClass.forEach(function (item) {
        if (item == "cart-open") {
            logicGen = false
            selectShop.style.display = "none"
        } else {
            logicGen = true
            selectShop.style.display = "flex"
        }
    })
    if (logicGen) {
        selectCart.innerHTML = null // Не нашел быстрого удаления всех дочерних элементов.
    } else cartGen()
}


window.onload = cartCount()
window.onload = shopGen()