console.log("Challenge 2: Boda Boda Ride Fare Estimator")

// Prompt user for distance in kilometers
const fareInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance= Number (fareInput);

// Makes Input to be valid
if (isNaN(distance)|| distance <= 0){
    console.log("Not an appropriate Distance")
    
} else{
    // Fare calculation constants
    const baseFare= 50;
    const perKm= 15;

    // Calculate fare components
    let distancePerkm = distance*perKm;
    let total = baseFare + (distance * perKm);
    
    // Outputs of fare 
    console.log(`Uko kwote? Io ni ${distance} km:`); 
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`); 
    console.log(`Mpaka Uko: KES ${distancePerkm}`);
    console.log(`Total: KES ${total}`);
    console.log("Panda Pikipiki!")
}


// Function to calculate total boda fare 
function calculateBodaFare(distance){
    return  baseFare + (distance * perKm);
    
}




