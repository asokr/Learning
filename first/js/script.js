'use strict';

let money, time,
    GoRock = document.getElementById('start'),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem = document.getElementsByClassName('expenses-item'),
    button = document.querySelectorAll('button'),
    expensesItemBtn = button[0],
    optionalExpensesBtn = button[1],
    countBudgetBtn = button[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    button.forEach(function(item){
           item.style.opacity = 0.5;
    });
    button[button.length-1].style.opacity = 1;
GoRock.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    button.forEach(function(item){
        item.style.opacity = 1;
    });


    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budjet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();


expensesItemBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;

        } else {

            i--;
        }
    }
    expensesValue.textContent = sum;
    appData.wespent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    let i = 0;
    while (i < optionalExpensesItem.length) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        i++;
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budjet != undefined) {
        appData.moneyPerDay = ((appData.budjet - appData.wespent) / 30 ).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "У вас минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка!";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else {
        daybudgetValue.textContent = "Ошибка";
    }
});

income.addEventListener('input', function() {
    let items = income.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener('input', function() {
    if (appData.savings == true) {
        let suma = sum.value,
            percenta = + percent.value;

        appData.monthIncome = +(suma / 100 / 12 * percenta).toFixed(1);
        appData.yearIncome = +(suma / 100 * percenta).toFixed(1);

        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent =  appData.yearIncome; 
    }
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let suma = sum.value,
        percenta = + percent.value;

    appData.monthIncome = +(suma / 100 / 12 * percenta).toFixed(1);
    appData.yearIncome = +(suma / 100 * percenta).toFixed(1);

    monthsavingsValue.textContent = appData.monthIncome;
    yearsavingsValue.textContent =  appData.yearIncome;  
    }
});


});

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    wespent: 0
};