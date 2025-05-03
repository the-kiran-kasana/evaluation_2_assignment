

function createBankAccount(balance)
{
  return{
     deposit: function(amount)
     {
      return balance = balance + amount
     },
    
    withdraw: function(amount)
    {
      return balance = balance - amount
    },
    
     getBalance:function()
     {
       return balance
     }
  }
}


const account = createBankAccount(100)

console.log(account.deposit(50))

console.log(account.withdraw(30)) 

console.log(account.getBalance())
