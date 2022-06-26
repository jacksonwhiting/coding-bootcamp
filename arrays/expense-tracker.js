const account = {
   name: "Jackson Whiting",
   expenses: [{
      description: "dining out",
      amount: 75
   }, {
      description: "baggage fee",
      amount: 25
   }],
   income: [{
      description: "Salary",
      amount: 200
   }, {
      description: "client 1",
      amount: 100
   }],
   addExpense: function (description, amount) {
      this.expenses.push({
         description,
         amount
      })
   },
   addIncome: function (description, amount) {
      this.income.push({
         description,
         amount
      })
   },
   getAccountSummary: function () {
      let totalExpenses = 0;
      let totalIncome = 0;

      this.expenses.forEach(expense => {
         totalExpenses += expense.amount;
      });

      this.income.forEach(income => {
         totalIncome += income.amount;
      })
      return `${this.name} has a balance of $${totalIncome - totalExpenses}.  $${totalIncome} in income.  $${totalExpenses} in expenses.`
   }
};

account.addExpense("Taxi", 50)
account.addIncome("client 2", 125)
console.log(account);
console.log(account.getAccountSummary());