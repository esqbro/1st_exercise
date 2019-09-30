//'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let expenditure1 = prompt("Введите обязательную статью расходов в этом месяце");
let costs1 = prompt("Во сколько обойдется?");

let expenditure2 = prompt("Введите обязательную статью расходов в этом месяце");
let costs2 = prompt("Во сколько обойдется?");
            

let expenses = {
    expenditure1, costs1, 
    expenditure2, costs2
};

let oneDayBudget = money / 30;
alert(oneDayBudget);

let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: {},
    income: [],
    savings: false,
};

console.log(appData);