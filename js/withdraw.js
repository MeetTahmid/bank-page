document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement =  document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithsrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotalElement.innerText = currentWithsrawTotal;

    const balenceTotalElement = document.getElementById('balence-total');
    const previousBalenceTotalString = balenceTotalElement.innerText;
    const previousBalenceTotal = parseFloat(previousBalenceTotalString);

    const newBalenceTotal = previousBalenceTotal - newWithdrawAmmount;
    balenceTotalElement.innerText = newBalenceTotal;

    

    withdrawField.value = ''
})