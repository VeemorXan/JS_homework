console.log('Hello World');
let userAge = 25; // числа - Number
let userFavoriteDish = 'ramen'; // строки - string
let isHungry = true; // булевый - boolean
let userPassword = null; // null
let userLocate; // undefined
let dish = {// объект - object
    dishName: "ramen",
    mainIngredient: "noodles",
    servingTemperature: "hight",
    kitchen: "japanese" 
};
let restoranName = Symbol('Yokohama'); // символ - symbol
let bigNumber = BigInt(2**54); // bigint
console.log(userAge, userFavoriteDish, isHungry, userPassword, userLocate, dish, restoranName, bigNumber); // вывод переменных
console.log(typeof userAge, typeof userFavoriteDish, typeof isHungry, typeof userPassword, typeof userLocate, typeof dish, typeof restoranName, typeof bigNumber); // вывод типа через оператора
console.log(typeof (userAge), typeof (userFavoriteDish), typeof (isHungry), typeof (userPassword), typeof (userLocate), typeof (dish), typeof (restoranName), typeof (bigNumber)); // вывод типа через функцию
const userBirthday = 10;
//userBirthday = 11; // изменение const - ошибка Assignment to constant variable.
const client = {
    name: "Dave",
    age: "26"
};
//client = {
//    name: "Dan",
//    age: "28"
//};  // изменение const - ошибка Assignment to constant variable.
dish = {// объект - object
    dishName: "udon",
    mainIngredient: "noodles",
    servingTemperature: "medium",
    kitchen: "chinese" 
};
console.log(dish) // переменная (объект) dish, объявленная через let, изменилась
var car = {
    carType: "sport",
    carColor: "red"
};
car = {
    carType: "sedan",
    carColor: "blue"
};
console.log(car) // переменная типа object, объявленная через var, изменилась