var fleas_owned = 0;

var catCost = 15;
var catsOwned = 0;
var dogCost = 100;
var dogsOwned = 0;
var bloodCost = 1000;
var bloodowned = 0;

document.getElementById("fleas").innerHTML = fleas_owned;

function erection(amount) {
    fleas_owned = fleas_owned + amount;
    document.getElementById("fleas").innerHTML = fleas_owned;
}

function buyCat() {
    if (fleas_owned >= catCost) {
        fleas_owned = fleas_owned - catCost;
        catsOwned = catsOwned + 1;
        catCost = Math.round(catCost * 1.5);

        document.getElementById("fleas").innerHTML = fleas_owned;
        document.getElementById("catcost").innerHTML = catCost;
        document.getElementById("catsowned").innerHTML = catsOwned;
    }
}

function buyDog() {
    if (fleas_owned >= dogCost) {
        fleas_owned = fleas_owned - dogCost;
        dogsOwned = dogsOwned + 1;
        dogCost = Math.round(dogCost * 2.5);

        document.getElementById("fleas").innerHTML = fleas_owned;
        document.getElementById("dogcost").innerHTML = dogCost;
        document.getElementById("dogsowned").innerHTML = dogsOwned;
    }
}

function buyBlood() {
    if (fleas_owned >= bloodCost) {
        fleas_owned = fleas_owned - bloodCost;
        bloodowned = bloodowned + 1;
        bloodCost = Math.round(bloodCost * 5.5);

        document.getElementById("fleas").innerHTML = fleas_owned;
        document.getElementById("bloodcost").innerHTML = bloodCost;
        document.getElementById("bloodowned").innerHTML = bloodowned;
    }
}

setInterval(function() {
    fleas_owned = fleas_owned + (catsOwned * Math.floor((Math.random() * 2) + 1));
    fleas_owned = fleas_owned + (dogsOwned * Math.floor((Math.random() * 4) + 1));
    fleas_owned = fleas_owned + (bloodowned * Math.floor((Math.random() * 10) + 1));
    document.getElementById("fleas").innerHTML = fleas_owned;
    document.title = fleas_owned + " fleas - Flea Clicker"
}, 1000)