//переменные для корзины
let selectCart = document.querySelector(".cart")
let selectCartClick = document.querySelector(".cart-icon")
selectCartClick.addEventListener("click", openCart)
let selectCartCount = document.querySelector(".count-product")
let selectShop = document.querySelector(".shop")
let selectUp = document.querySelector(".up-complite")
let selectUpArr = document.querySelectorAll(".step")
let ligic = 0
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

function sumCart() {
    summTemp = 0
    for (let l = 0; l < cart.length; l++) {
        element = cart[l]
        summTemp = summTemp + (element.price * element.count)
    }
    if (cart.length != 0) {
        numberSummCart.style.display = "block"
        numberSummCart.textContent = `Общая сумма покупки составляет: ${summTemp}`
    } else numberSummCart.style.display = "none"
}

function addCartCount() {
    elementEvent = this
    for (let l = 0; l < cart.length; l++) {
        element = cart[l]
        if (element.id == elementEvent.dataset.id) {
            element.count = elementEvent.value
        }
    }
}

function buttonEditCountCart() {
    buttonElement = this
    if (buttonElement.classList == "action-minus") {
        inpTarg = buttonElement.nextSibling
        inpTarg.value = (inpTarg.value != 1) ? Number(inpTarg.value) - 1 : 1
        for (let l = 0; l < cart.length; l++) {
            element = cart[l]
            if (element.id == inpTarg.dataset.id) {
                element.count = inpTarg.value
            }
        }
    } else {
        inpTarg = buttonElement.previousElementSibling
        inpTarg.value = Number(inpTarg.value) + 1
        for (let l = 0; l < cart.length; l++) {
            element = cart[l]
            if (element.id == inpTarg.dataset.id) {
                element.count = inpTarg.value
            }
        }
    }
    sumCart()
}

function removeCartItem(event) {
    selectCartItems = document.querySelector(".cart-items")
    if (event.target.className == "remove-item") {
        selectCartItems.removeChild(this)
        cart.splice(findId(cart, this.dataset.id), 1)
        cartCount()
        sumCart()
    }
    if (cart.length == 0) {
        cartNoneGen()
        summCartAll.style.display = "none"
        itemsCart.style.display = "none"
        cartCount()

    }
}

function cartGen() {
    if (cart.length != 0) {
        summCartAll = document.createElement("div")
        summCartAll.className = "cart-summ-all"
        numberSummCart = document.createElement("span")
        summCartAll.append(numberSummCart)
        selectCart.append(summCartAll)
        itemsCart = document.createElement("div")
        itemsCart.className = "cart-items"
        itemsCart.style.display = "flex"
        selectUp.style.display = "flex"
        selectCart.append(itemsCart)
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
            countBlock = document.createElement("div")
            countBlock.className = "count-container"
            count = document.createElement("span")
            count.textContent = "Кол-во: "
            count.className = "car-count"
            countBlock.append(count)
            actionMinus = document.createElement("div")
            actionMinus.className = "action-minus"
            actionMinus.addEventListener("click", buttonEditCountCart)
            countBlock.append(actionMinus)
            inputCount = document.createElement("input")
            inputCount.dataset.id = element.id
            inputCount.addEventListener("change", addCartCount)
            inputCount.addEventListener("change", sumCart)
            inputCount.className = "input-count"
            inputCount.setAttribute("type", "number")
            inputCount.setAttribute("min", 1)
            inputCount.setAttribute("value", element.count)
            countBlock.append(inputCount)
            actionPlus = document.createElement("div")
            actionPlus.className = "action-pluse"
            actionPlus.addEventListener("click", buttonEditCountCart)
            countBlock.append(actionPlus)
            cartSum = document.createElement("div")
            cartSum.className = "car-sumer"
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
            aboutBlock = document.createElement("div")
            aboutBlock.className = "about-product"
            removeProduct = document.createElement("div")
            removeProduct.className = "remove-item"
            removeProduct.dataset.id = element.id
            cartProduct.append(removeProduct)
            cartProduct.append(imgElement)
            cartProduct.append(aboutBlock)
            aboutBlock.append(titlteElement)
            aboutBlock.append(description)
            aboutBlock.append(character)
            aboutBlock.append(cartSum)
            aboutBlock.append(countBlock)
            cartProduct.className = "cart-product"
            cartProduct.dataset.id = element.id
            cartProduct.addEventListener("click", removeCartItem)
            itemsCart.append(cartProduct)
        }
        nextStepB = document.createElement("button")
        nextStepB.className = "next-b"
        nextStepB.textContent = "Далее"
        nextStepB.dataset.step = 1
        nextStepB.addEventListener("click", nextStep)
        selectCart.append(nextStepB)
        sumCart()
    } else {
        cartNoneGen()
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
        shopProduct = document.createElement("div")
        aboutBlock = document.createElement("div")
        aboutBlock.className = "about-product"
        shopProduct.append(imgElement)
        shopProduct.append(aboutBlock)
        aboutBlock.append(titlteElement)
        aboutBlock.append(description)
        aboutBlock.append(character)
        aboutBlock.append(price)
        aboutBlock.append(addCart)
        shopProduct.className = "shop-product"
        selectShop.append(shopProduct)

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
            selectUp.style.display = "none"
            selectShop.style.display = "flex"
        }
    })
    if (logicGen) {
        selectCart.innerHTML = null // Не нашел быстрого удаления всех дочерних элементов.
    } else cartGen()
}

function cartNoneGen() {
    cartNoneElement = document.createElement("div")
    textNoneCart = document.createElement("h3")
    textNoneCart.textContent = "Корзина пуста"
    cartNoneElement.append(textNoneCart)
    selectCart.append(cartNoneElement)
    cartNoneElement.className = "cart-none"
}

function nextStep() {
    itemsCart.style.display = "none"
    summCartAll.style.display = "none"
    for (let h = 1; h < selectUpArr.length; h++) {
        if (h == this.dataset.step) {
            selectUpArr[h - 1].className = "step step-active"
            selectCart.children[h - 1].style.display = "block"
            if (h - 1 != 0) {
                selectCart.children[h - 2].style.display = "none"
            }
        }
    }
    this.dataset.step++

}

window.onload = cartCount()
window.onload = shopGen()