'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');



let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдётся?', '');
    if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i--;
    }
};

// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдётся?', '');
//     if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         i--;
//     }
// } while (i < 2);

// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдётся?', '');
//     if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         i--;
//     }   
// }

appData.moneyPerDay = appData.budjet / 30;

alert("Ваш бюджет на один день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка!")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка")
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка!");
} else {
    console.log("Ошибка");
}