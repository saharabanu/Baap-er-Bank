// handle deposit button event  
document.getElementById('deposit-button').addEventListener('click',function(){
    // get amount deposited  
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
//    console.log(depositAmount);
   const depositTotal = document.getElementById('deposit-total');
//    console.log(depositTotal.innerText);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance  
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
   

//    clear the deposite input value  
    depositInput.value = '';


})
// handle withdraw button   
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
      const withdrawtotal = document.getElementById('withdraw-total');
      const previousWithdrawText = withdrawtotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawText);

      withdrawtotal.innerText = previousWithdrawTotal + newWithdrawAmount;

    //   set balance handling  
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
    // clear input  
    withdrawInput.value = '';


       
      
   })

   
    
   
