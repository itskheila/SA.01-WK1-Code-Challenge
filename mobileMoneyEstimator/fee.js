
console.log("Challenge 3: Simplified Mobile Money Transaction Fee Estimator")

// A prompt for the user for amount to send
const feeInput = prompt("Unatuma Ngapi? (KES):");
const amount = Number(feeInput);

// Validates input entered
if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    
} else {
    // Calculates fee and total debited
    const fee = estimateTransactionFee(amount);
    const totalDebited = amount + fee;

    // Output results
    console.log(`Sending KES ${amount}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("Send Money Securely!");
}

// Function to estimate transaction fee based on rules
function estimateTransactionFee(amountToSend) {
    let fee;
    let percentageFee = amountToSend * 0.015;

    if (percentageFee < 10) {
        fee = 10; //minimum required fare
    } else if (percentageFee > 70) { 
        fee = 70; //maximum required fare
    } else {
        fee = percentageFee} // the fare that doesn't change/standard fare
       
    return fee;
}


