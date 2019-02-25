'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let expensesAnswer1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expensesAnswer2 = prompt('Во сколько обойдётся?', '');

let appData = {
    money: money,
    timeData: time,
    expenses: {
        expensesAnswer1 : expensesAnswer2
    },
    optionalExpenses: {},
    savings: false
};

alert("Ваш бюджет на один день: " + money/30);
