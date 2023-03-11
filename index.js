const scoreHome = document.getElementById("score_home")
const saveHome = document.getElementById("saved_home")
const scoreGuest = document.getElementById("score_guest")
const saveGuest = document.getElementById("saved_guest")
const gamesetEl = document.getElementById("gameset")
let countHome = 0
let countGuest = 0
let gameCount = 0

//Home btn
function add1Home() {
    if(gameCount < 4) {
        countHome += 1;
        scoreHome.textContent = countHome;
    }
}

function add2Home() {
    if(gameCount < 4) {
        countHome += 2;
        scoreHome.textContent = countHome;
    }
}

function add3Home() {
    if(gameCount < 4) {
        countHome += 3;
        scoreHome.textContent = countHome;
    }
}

//Guest btn
function add1Guest() {
    if(gameCount < 4) {
        countGuest += 1;
        scoreGuest.textContent = countGuest;
    }
}

function add2Guest() {
    if(gameCount < 4) {
        countGuest += 2;
        scoreGuest.textContent = countGuest;
    }
}

function add3Guest() {
    if(gameCount < 4) {
        countGuest += 3;
        scoreGuest.textContent = countGuest;
    }
}

//score handling btns
function save() {
    if (gameCount < 3) {
        if(saveHome.textContent.length === 7 && saveGuest.textContent.length === 7) {
            saveHome.textContent += countHome
            saveGuest.textContent += countGuest
            gameCount++
        } else {
            saveHome.textContent += " - " + countHome
            saveGuest.textContent += " - " + countGuest
            gameCount++ 
        } 
    } else if (gameCount === 3) {
        gamesetEl.textContent = "Gameset!"
        saveHome.textContent += " - " + countHome
        saveGuest.textContent += " - " + countGuest
        gameCount++
    }
}

function restart() {
    gameCount = 0
    gamesetEl.textContent = ""
    countHome = 0
    scoreHome.textContent = 0
    countGuest = 0
    scoreGuest.textContent = 0
    saveHome.textContent = "Score: "
    saveGuest.textContent = "Score: "
}