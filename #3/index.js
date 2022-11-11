// С помощью условных операторов вывести на экран длину наибольшего отрезка
// из трех данных.

const firstLine = 5;
const secLine = 1;
const firdLine = 7;


let maxLength = (firstLine > secLine && firstLine > firdLine) ? (console.log(firstLine)) : 
                (secLine > firstLine && secLine > firdLine) ? (console.log(secLine)) :
                (firdLine > firstLine && firdLine > secLine) ? (console.log(firdLine)) : console.log('наибольшего отрезка из трёх нет');

// Реализовать систему рекомендаций для пользователя опираясь на значение
// переменной, хранящей значение температуры в градусах Цельсия.
// ○ ниже -30: “Оставайтесь дома!”;
// ○ от -30 до -10 включительно: “Сегодня холодно”;
// ○ от -10 до +5 включительно: “Не холодно”;
// ○ от +5 до +15 включительно: “Тепло”;
// ○ от +15 до +25 включительно: “Очень тепло”;
// ○ от +25 до +35: “Жарко”;
// ○ выше либо равно +35: “Пекло!”;

let degree = 25;

if (degree<-30) {
    console.log('Оставайтесь дома!');
} else if (-30<=degree && degree<=-10) {
    console.log('Сегодня холодно');
} else if (-10<degree && degree<=5) {
    console.log('Не холодно');
} else if (5<degree && degree<=15) {
    console.log('Тепло');
} else if (15<degree && degree<=25) {
    console.log('Очень тепло');
} else if (25<degree && degree<35) {
    console.log('Жарко');
} else if (degree>=35) {
    console.log('Пекло!');
} else {
    console.log('Ошибка');
}

// С помощью конструкции switch и переменной, хранящей роль пользователя
// (admin, manager, user ...), выводить на экран информацию о пользователе
// (информацию любого типа, роль, дату рождения, любимый напиток и тд).

const typeUser = 'user' // user, manager 

const admin = {
    role: "Администратор",
    birthday: "20 июня",
    favoriteDrink: "Pepsi"
}

const user = {
    role: "Пользователь",
    birthday: "15 июня",
    favoriteDrink: "Cola"
}

const manager = {
    role: "Менеджер",
    birthday: "10 июня",
    favoriteDrink: "Fanta"
}

switch (typeUser) {
    case 'admin':
        console.log(admin);
        break;
    case 'user':
        console.log(user);
        break;
    case 'manager':
        console.log(manager);
        break;
    default:
        console.log('Неизвестный тип пользователя');
        break;
}

// Решить следующие задачи с использованием циклов while и for.
// ● Вывести в консоль заданную строку N раз.

// При N = 4:
for(let i=0;i<4;i++) {
    console.log(i + ' Заданная строка');
}

// Ежедневно количество доступных автомобилей в салоне уменьшается в два
// раза. Выяснить, на какой день продаж, количество доступных к покупке авто
// станет меньше M, если известно, что в первый день продаж всего было N
// автомобилей.

let M = 54;
let days = 0;

for (let N = 652; N>M; N=N/2){
    days++
}
    console.log(`Количество дней: ${days}`);

//     Проанализировав временной промежуток начиная с 1800 и до 2020 года найти
// и вывести в консоль:
// ○ Год первого полета человека в космос и количество итераций которое потребовалось для поиска.


let iterationsKosmo = 0;
for (let year = 1800; year <=2020; year++){
    iterationsKosmo++
    if (year == 1961) break;
}
    console.log(`Количество итераций: ${iterationsKosmo}`);

// ○ Количество високосных годов принадлежащих данному отрезку и количество итераций которое
// потребовалось для поиска.
let iterationsLeap = 0;
for (let year = 1800; year <=2020; year = year+4){
    iterationsLeap++
    if (year == 1800) continue;
    if (year == 1900) continue;
}
    console.log(`Количество итераций: ${iterationsLeap}`);