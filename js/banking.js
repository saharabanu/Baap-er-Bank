function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
     const amountValue = parseFloat(inputAmountText);
     
//    clear the deposite input value  
    inputField.value = '';
     return amountValue;
}
function updateTotalField(totalFieldId,amount){
    const TotalElement = document.getElementById(totalFieldId);
    const totalText = TotalElement.innerText;
    const previousTotal = parseFloat(totalText);

    const newTotal = previousTotal + amount;
    TotalElement.innerText = newTotal;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
   /*  const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd==true){
        const newBalanceTotal = previousBalanceTotal + amount;
    balanceTotal.innerText = newBalanceTotal;
    }
    else{
        const newBalanceTotal = previousBalanceTotal - amount;
    balanceTotal.innerText = newBalanceTotal;
    }
    
}




// handle deposit button event  
document.getElementById('deposit-button').addEventListener('click',function(){
    const newDepositAmount = getInputValue('deposit-input');
     
   if(newDepositAmount >0){
    updateTotalField('deposit-total',newDepositAmount);
    updateBalance(newDepositAmount,true);
   }

    // get amount deposited  
  /*  const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */
//    console.log(depositAmount);
   /* const depositTotal = document.getElementById('deposit-total');
//    console.log(depositTotal.innerText);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText); */

    /* const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal; */

    // update balance  
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; */
   
/* 
//    clear the deposite input value  
    depositInput.value = ''; */


})
// handle withdraw button   
document.getElementById('withdraw-button').addEventListener('click',function(){
    const newWithdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
   if(newWithdrawAmount >0 && newWithdrawAmount < currentBalance){
    updateTotalField('withdraw-total',newWithdrawAmount);
    updateBalance(newWithdrawAmount,false)
   }
   if(newWithdrawAmount > currentBalance){
       alert('you do not have right amount.please check balance')
   }
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); */

      /* const withdrawtotal = document.getElementById('withdraw-total');
      const previousWithdrawText = withdrawtotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawText);

      withdrawtotal.innerText = previousWithdrawTotal + newWithdrawAmount; */

    //   set balance handling  
   /*  const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount; */
    // // clear input  
    // withdrawInput.value = '';


       
      
   })

   
    
   
