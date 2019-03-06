'use strict';

let money, time,
GoRock = document.getElementById('start'),
budgetValue = document.querySelector(".budget-value"), daybudgetValue = document.querySelector(".daybudget-value"),
levelValue = document.querySelector(".level-value"), expensesValue = document.querySelector(".expenses-value"),
optionalexpensesValue = document.querySelector(".optionalexpenses-value"), incomeValue = document.querySelector(".income-value"),
monthsavingsValue = document.querySelector(".monthsavings-value"), yearsavingsValue = document.querySelector(".yearsavings-value"),
expensesItem = document.getElementsByClassName('.expenses-item'),
button = document.getElementsByTagName('button'), expensesItemBtn = button[0], optionalExpensesBtn = button[1],
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
income = document.querySelector('#income'),
savings = document.querySelector('#savings'), 
sum = document.querySelector('#sum'), 
yearValue = document.querySelector('.year-value'), 
monthValue = document.querySelector('.month-value'), 
dayValue = document.querySelector('.day-value');

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();


let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдётся?', '');
            if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    chooseOptExpenses: function () {
        let i = 1;
        while (i <= 3) {
            appData.optionalExpenses[i] = prompt('Статья не обязательных расходов?');
            while (appData.optionalExpenses[i] == "" || appData.optionalExpenses[i] == null) {
                appData.optionalExpenses[i] = prompt('Статья не обязательных расходов?');
            }
            i++;
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();

        alert("Ваш бюджет на один день: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("У вас минимальный уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка")
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка!");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                precent = +prompt("Под какой процент?");

            appData.monthIncome = +(save / 100 / 12 * precent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        while (items == '' || items == null || !(typeof(items)) == 'string' ) {
            items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        } 
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        appData.income.forEach(function(items, i) {
            console.log(++i+": "+items);
        });
    }
};

appData.chooseExpenses();

appData.chooseOptExpenses();

appData.detectDayBudget();

appData.detectLevel();

appData.checkSavings();

console.log("Наша программа включает в себя данные:");
for (let item in appData) {
 console.log(item+': '+appData.item);
}

