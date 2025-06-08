const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const Cups = Number(input);

if (isNaN(Cups)) {
    alert('Not a Number');
} else {
    console.log(`To make ${Cups} cups of Kenyan Chai, you will need:`);
    console.log(calculateChaiIngredients(Cups));
    console.log("Enjoy your Chai Bora!");
}

function calculateChaiIngredients(Cups) {
    function water(Cups) {
        return `${200 * Cups} ml`;
    }
    function milk(Cups) {
        return `${50 * Cups} ml`;
    }
    function teaLeaves(Cups) {
        return `${1 * Cups} tablespoons`;
    }
    function sugar(Cups) {
        return `${2 * Cups} teaspoons`;
    }

    return {
        Water: water(Cups),
        Milk: milk(Cups),
        "Tea Leaves (Majani)": teaLeaves(Cups),
        "Sugar (Sukari)": sugar(Cups)
    };
}
