document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field')
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmmount;

    depositTotalElement.innerText = currentDepositTotal;
    
    const balenceTotalElement = document.getElementById('balence-total');
    const previousBalenceTotalString = balenceTotalElement.innerText
    const previousBalenceTotal = parseFloat(previousBalenceTotalString);

    const currentBalenceTotal = previousBalenceTotal + newDepositAmmount;
    balenceTotalElement.innerText = currentBalenceTotal

    depositField.value = ''
})