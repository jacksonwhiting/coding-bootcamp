let myAccount = {
   name: 'Jackson Whiting',
   income: 1000,
   expenses: 350
};

// Reset the Account
let resetAccount = function (account) {
   account.income = 0;
   account.expenses = 0;
   console.log(account);
};

resetAccount(myAccount);

//Add an expense
let addExpense = function (account, expenseAmount) {
   account.expenses += expenseAmount;
   console.log(account);
};

addExpense(myAccount, 100);

// Add Income
let addIncome = function (account, incomeAmount) {
   account.income += incomeAmount;
   console.log(account);
};

addIncome(myAccount, 500);

// getAccountSummary
let getAccountSummary = function (account) {
   let summary = `${account.name} has $${account.income} in income and $${account.expenses} in expenses!`;
   console.log(summary);
};

getAccountSummary(myAccount);