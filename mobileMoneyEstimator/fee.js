
console.log("Challenge 3: Simplified Mobile Money Transaction Fee Estimator")

const feeInput = prompt("Unatuma Ngapi? (KES):");
const amount = Number(feeInput);

if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    
} else {
    const fee = estimateTransactionFee(amount);
    const totalDebited = amount + fee;
    console.log(`Sending KES ${amount}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("Send Money Securely!");
}

function estimateTransactionFee(amountToSend) {
    let fee;
    let percentageFee = amountToSend * 0.015;

    if (percentageFee < 10) {
        fee = 10;
    } else if (percentageFee > 70) { 
        fee = 70;
    } else {
        fee = percentageFee}
       
    return fee;
}

