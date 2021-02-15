//Задание 1
let i = 1
let notReturn
while (i <= 100) {

    if (i != 1) {
        notReturn = false
        for (max = i - 1; max >= 2; max--) {
            if (i % max == 0) {
                notReturn = true
            }

        }
    }
    if (!notReturn) {
        console.log(i)
    }
    i++
}

//Задание 2-3
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

//Задание 4
for (i = 0; i <= 9; console.log(i++)) {}

//задание 5
str = "*"
for (i = 1; i <= 20; i++) {
    console.log(str)
    str += "*"
}