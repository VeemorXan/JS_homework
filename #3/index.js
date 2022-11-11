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

const typeUser = 'admin' // user, manager 

const admin = {
    role: "Администратор"
    birthday: "20 июня"
    favoriteDrink: "Pepsi"
}

const user = {
    role: "Администратор"
    birthday: "20 июня"
    favoriteDrink: "Pepsi"
}

const user = {
    role: "Администратор"
    birthday: "20 июня"
    favoriteDrink: "Pepsi"
}

switch (typeUser) {
    case 'admin':
        console.log(admin);
        break;
    case 'user':
        console.log('Вы пользователь');
        break;
    case 'manager':
        console.log('Вы гость');
        break;
    default:
        console.log('Неизвестный тип пользователя');
        break;
}