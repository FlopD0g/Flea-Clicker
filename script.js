var fleas_owned = 0;

var catCost = 100;
var catsOwned = 0;
var dogCost = 1000;
var dogsOwned = 0;

var bloodCost = 10000;
var bloodowned = 0;
var catMultiplierCost = 500;
var catsMultiplierOwned = 1;
var dogMultiplierCost = 5000;
var dogsMutliplierOwned = 1;
var fps = 0;

const catStyles = document.querySelectorAll('.cat');
const catUpgradeStyles = document.querySelectorAll('.catupgrade');
const dogStyles = document.querySelectorAll('.dog');
const dogUpgradeStyles = document.querySelectorAll('.dogupgrade');
const bloodStyles = document.querySelectorAll('.blood');

document.getElementById("fleas").innerHTML = fleas_owned;
document.getElementById("fps").innerHTML = fps;

function erection(amount) {
    fleas_owned += amount;
    fps += amount;
    document.getElementById("fleas").innerHTML = fleas_owned;
    document.getElementById("fps").innerHTML = fps;
}

function buyCat() {
    if (fleas_owned >= catCost) {
        fleas_owned -= catCost;
        catsOwned += 1;
        catCost = Math.round(catCost * 1.5);

        document.getElementById("fleas").innerHTML = fleas_owned;
        document.getElementById("catcost").innerHTML = catCost;
        document.getElementById("catsowned").innerHTML = catsOwned;
    }
}

function buyCatMultiplier() {
    if (fleas_owned >= catMultiplierCost) {
        fleas_owned -= catMultiplierCost;
        catsMultiplierOwned *= 2;
        catMultiplierCost = Math.round(catMultiplierCost * 3.5);

        document.getElementById("fleas").innerHTML = fleas_owned;
        document.getElementById("catmultipliercost").innerHTML = catMultiplierCost;
        document.getElementById("catsmultiplierowned").innerHTML = catsMultiplierOwned;
    }
}

function buyDog() {
    if (fleas_owned >= dogCost) {
        fleas_owned -= dogCost;
        dogsOwned += 1;
        dogCost = Math.round(dogCost * 2.5);

        document.getElementById("fleas").innerHTML = fleas_owned;
        document.getElementById("dogcost").innerHTML = dogCost;
        document.getElementById("dogsowned").innerHTML = dogsOwned;
    }
}

function buyDogMultiplier() {
    if (fleas_owned >= dogMultiplierCost) {
        fleas_owned -= dogMultiplierCost;
        dogsMutliplierOwned *= 2;
        dogMultiplierCost = Math.round(dogMultiplierCost * 4.5);

        document.getElementById("fleas").innerHTML = fleas_owned;
        document.getElementById("dogmultipliercost").innerHTML = dogMultiplierCost;
        document.getElementById("dogsmultiplierowned").innerHTML = dogsMutliplierOwned;
    }
}

function buyBlood() {
    if (fleas_owned >= bloodCost) {
        fleas_owned -= bloodCost;
        bloodowned += 1;
        bloodCost = Math.round(bloodCost * 5.5);

        document.getElementById("fleas").innerHTML = fleas_owned;
        document.getElementById("bloodcost").innerHTML = bloodCost;
        document.getElementById("bloodowned").innerHTML = bloodowned;
    }
}

function checkAvailability(variable, elid, elid2) {
    if (fleas_owned >= variable) {
        document.getElementById(elid).style.backgroundColor = "#cccccc";
        document.getElementById(elid2).style.color = "#00cc00";
    }
    else if (fleas_owned < variable) {
        document.getElementById(elid).style.backgroundColor = "#999999";
        document.getElementById(elid2).style.color = "#cc0000"
    }
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.fleas_owned !== "undefined") fleas_owned = savedGame.fleas_owned;
    if (typeof savedGame.catCost !== "undefined") catCost = savedGame.catCost;
    if (typeof savedGame.catsOwned !== "undefined") catsOwned = savedGame.catsOwned;
    if (typeof savedGame.dogCost !== "undefined") dogCost = savedGame.dogCost;
    if (typeof savedGame.dogsOwned !== "undefined") dogsOwned = savedGame.dogsOwned;
    if (typeof savedGame.bloodCost !== "undefined") bloodCost = savedGame.bloodCost;
    if (typeof savedGame.bloodowned !== "undefined") bloodowned = savedGame.bloodowned;
    if (typeof savedGame.catMultiplierCost !== "undefined") catMultiplierCost = savedGame.catMultiplierCost;
    if (typeof savedGame.catsMultiplierOwned !== "undefined") catsMultiplierOwned = savedGame.catsMultiplierOwned;
    if (typeof savedGame.dogMultiplierCost !== "undefined") dogMultiplierCost = savedGame.dogMultiplierCost;
    if (typeof savedGame.dogsMutliplierOwned !== "undefined") dogsMutliplierOwned = savedGame.dogsMutliplierOwned;

    document.getElementById("fleas").innerHTML = fleas_owned;
    document.getElementById("fps").innerHTML = fps;
    document.getElementById("catcost").innerHTML = catCost;
    document.getElementById("catsowned").innerHTML = catsOwned;
    document.getElementById("catmultipliercost").innerHTML = catMultiplierCost;
    document.getElementById("catsmultiplierowned").innerHTML = catsMultiplierOwned;
    document.getElementById("dogcost").innerHTML = dogCost;
    document.getElementById("dogsowned").innerHTML = dogsOwned;
    document.getElementById("dogmultipliercost").innerHTML = dogMultiplierCost;
    document.getElementById("dogsmultiplierowned").innerHTML = dogsMutliplierOwned;
    document.getElementById("bloodcost").innerHTML = bloodCost;
    document.getElementById("bloodowned").innerHTML = bloodowned;

}

function saveGame() {
    var gameSave = {
        fleas_owned: fleas_owned,
        catCost: catCost,
        catsOwned: catsOwned,
        dogCost: dogCost,
        dogsOwned: dogsOwned,
        bloodCost: bloodCost,
        bloodowned: bloodowned,
        catMultiplierCost: catMultiplierCost,
        catsMultiplierOwned: catsMultiplierOwned,
        dogMultiplierCost: dogMultiplierCost,
        dogsMutliplierOwned: dogsMutliplierOwned
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function resetGame() {
    if(confirm("Are you sure you want to reset your game?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

window.onload = function() {
    loadGame();
};

setInterval(function() {
    if (bloodowned >= 1) {
        fps = (catsOwned * Math.floor((Math.random() * 2) + 1) * catsMultiplierOwned * bloodowned) 
        + (dogsOwned * Math.floor((Math.random() * 10) + 5) * dogsMutliplierOwned * bloodowned) 
        + (bloodowned * Math.floor((Math.random() * 100) + 30) * bloodowned)
    }
    fps = (catsOwned * Math.floor((Math.random() * 2) + 1) * catsMultiplierOwned) 
    + (dogsOwned * Math.floor((Math.random() * 10) + 5) * dogsMutliplierOwned) 
    + (bloodowned * Math.floor((Math.random() * 100) + 30))


    fleas_owned += fps;
    document.getElementById("fps").innerHTML = fps;
    document.getElementById("fleas").innerHTML = fleas_owned;
    document.title = fleas_owned + " fleas - Flea Clicker"

    checkAvailability(catCost, "cat", "catcost")
    checkAvailability(catMultiplierCost, "catmult", "catmultipliercost")
    checkAvailability(dogCost, "dog", "dogcost")
    checkAvailability(dogMultiplierCost, "dogmult", "dogmultipliercost")
    checkAvailability(bloodCost, "blood", "bloodcost")
}, 1000) //1000ms = 1 second

setInterval(function() {
    saveGame();
}, 30000); //30000ms = 30 seconds

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        saveGame();
    }
}, false);

document.addEventListener("contextmenu", function(event){
    event.preventDefault();    
}, false);