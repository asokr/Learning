'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();



let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдётся?', '');
        if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
};

chooseExpenses();

function chooseOptExpenses() {
    let optionalExpenses,
        i = 1;
    while(i <= 3) {
        appData.optionalExpenses[i] = prompt('Статья не обязательных расходов?');
        while(appData.optionalExpenses[i] == "" || appData.optionalExpenses[i] == null) {
            appData.optionalExpenses[i] = prompt('Статья не обязательных расходов?');
        }
        i++;
    } 
}

chooseOptExpenses();

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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();

    alert("Ваш бюджет на один день: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("У вас минимальный уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка")
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка!");
    } else {
        console.log("Ошибка");
    }
}


function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            precent = +prompt("Под какой процент?");

        appData.monthIncome = +(save/100/12*precent).toFixed();
        alert("Доход в месяц с вашего депозита: "+appData.monthIncome);
    }
}

checkSavings();