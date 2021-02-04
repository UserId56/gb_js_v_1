//Задание 3
let a = 2
let b = -11

if (a > 0 && b > 0) {
    console.log(a - b)
} else {
    if (a > 0 && b > 0) {
        console.log(a * b)
    } else {
        if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
            console.log(a + b)
        }
    }
}
//задание 4
a = 4
switch (a) {
    case 1:
        console.log(a)
        break
    case 2:
        console.log(a)
        break
    case 3:
        console.log(a)
        break
    case 4:
        console.log(a)
        break
    case 5:
        console.log(a)
        break
    case 6:
        console.log(a)
        break
    case 7:
        console.log(a)
        break
    case 8:
        console.log(a)
        break
    case 9:
        console.log(a)
        break
    case 10:
        console.log(a)
        break
    case 11:
        console.log(a)
        break
    case 12:
        console.log(a)
        break
    case 13:
        console.log(a)
        break
    case 14:
        console.log(a)
        break
    case 15:
        console.log(a)
        break
    default:
        console.log("Error")
}

//задание 5
function plusik(a, b) {
    return (a + b)
}

function maionez(a, b) {
    return (a - b)
}

function mn(a, b) {
    return (a * b)
}

function de(a, b) {
    return (a / b)
}
//задание 6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "Сложение":
            return (plusik(arg1, arg2))
        case "Вычитание":
            return (maionez(arg1, arg2))
        case "Умножение":
            return (mn(arg1, arg2))
        case "Деление":
            return (de(arg1, arg2))
        default:
            console.log("Не верное значение. Укажите: Сложение,Вычитание,Умножение или Деление")
    }
}