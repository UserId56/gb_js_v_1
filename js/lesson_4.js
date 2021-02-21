let a = 235
let arA = new Array
let obA = {
    unit: null,
    ten: null,
    hundred: null
}

function numPars(a) {
    arA = String(a).split("")
    for (let i = 0; i < arA.length; i++) {
        switch (i) {
            case 0:
                obA.unit = arA[i]
                break
            case 1:
                obA.ten = arA[i]
                break
            case 2:
                obA.hundred = arA[i]
                break
            default:
                console.log("Число больше 999")
        }
    }
}

numPars(a)
console.log("Еденицы: ", obA.unit, " Десятки: ", obA.ten, " Сотни: ", obA.hundred)
//Задание 2
let Cart = [{
        id: "123",
        title: "Кофта",
        price: 5400
    },
    {
        id: "432",
        title: "Штанишки",
        price: 3400
    },
    {
        id: "153",
        title: "Чеботы",
        price: 1400
    }
]

function countBasketPrice(arrCart) {
    sumCart = 0
    for (product of arrCart) {
        sumCart += product.price
    }
    return (sumCart)
}
console.log(countBasketPrice(Cart))