console.log("Challenge 2: Boda Boda Ride Fare Estimator")

const fareInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance= Number (fareInput);

if (isNaN(distance)){
    console.log("Not an appropriate Distance")
} else{
    const baseFare= 50;
    const perKm= 15;
    let distancePerkm = distance*perKm;
    let total = baseFare + distance * perKm;
    
    console.log(`Uko kwote? Io ni ${distance} km:`); 
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`); 
    console.log(`Mpaka Uko: KES ${distancePerkm}`);
    console.log(`Total: KES ${total}`);
    console.log("Panda Pikipiki!")
}


function calculateBodaFare(distance){
    return  baseFare + (distance * perKm);
    
}


