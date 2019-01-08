window.addEventListener("load", sidenVises);

"use strict";
let points = 0;
let liv = 3;
let timeLeft = 10;

function sidenVises() {
    console.log("siden vises");

    //hideInfo();
    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#game").classList.remove("blur");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#tildeGif").classList.add("show");

    document.querySelector("#tildeGif").classList.remove("hide");

    //Fjern gameover og lavelC
    document.querySelector("#play").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hideStart");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("startGame");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("show");
    tidenGaar();
    //skul gameOver
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#gameover").classList.remove("show");
    //tildeGif



    // Vis spilskærm
    document.querySelector("#game").classList.add("show");

    // tilføj raising på stone0,1,2,3
    document.querySelector("#stone0").classList.add("raising");
    document.querySelector("#stone1").classList.add("raising");
    document.querySelector("#stone2").classList.add("raising");
    document.querySelector("#stone3").classList.add("raising");
    document.querySelector("#stone4").classList.add("raising");
    document.querySelector("#stone5").classList.add("raising");
    document.querySelector("#stone6").classList.add("raising");
    document.querySelector("#stone7").classList.add("raising");
    document.querySelector("#stone8").classList.add("raising");
    document.querySelector("#stone9").classList.add("raising");
    document.querySelector("#stone10").classList.add("raising");
    document.querySelector("#stone11").classList.add("raising");
    document.querySelector("#stone12").classList.add("raising");
    document.querySelector("#stone13").classList.add("raising");
    document.querySelector("#stone14").classList.add("raising");
    document.querySelector("#stone15").classList.add("raising");
    document.querySelector("#stone16").classList.add("raising");
    document.querySelector("#stone17").classList.add("raising");
    document.querySelector("#stone18").classList.add("raising");
    document.querySelector("#stone19").classList.add("raising");
    document.querySelector("#stone20").classList.add("raising");
    document.querySelector("#stone21").classList.add("raising");
    document.querySelector("#stone22").classList.add("raising");

    // genstart raising på stone0,1,2,3
    document.querySelector("#stone0").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone1").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone2").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone3").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone4").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone5").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone6").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone7").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone8").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone9").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone10").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone11").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone12").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone13").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone14").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone15").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone16").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone17").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone18").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone19").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone20").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone21").addEventListener("animationiteration", genstartStone);
    document.querySelector("#stone22").addEventListener("animationiteration", genstartStone);

    // document.querySelector("#ballon").classList.add("show");
    //document.querySelector("#ballon").classList.remove("hide");

    document.querySelector("#game").addEventListener("animationend", gameOver);
}

function genstartStone() {
    console.log(this);
    console.log("genstart stone");

    this.classList.remove("hide");
}

function tidenGaar() {
    console.log("timeLeft" + timeLeft);

    timeLeft--;
    console.log(timeLeft);

    if (timeLeft > 0) {
        setTimeout(tidenGaar, 1000);
    } else {
        gameOver();
    }

    document.querySelector("#tid").textContent = timeLeft;
    gameStatus();
}

function nyStone() {
    console.log("nyStone");
    this.className = "nyStone";
    this.classList.add("stone" + Math.floor((Math.random() * 23) + 0));
    this.classList.add("pos" + Math.floor((Math.random() * 9) + 1));
}

function gameStatus() {
    if (liv == 0) {
        gameOver();
    }
    if (points >= 10) {
        levelcomplete();
    }
}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#game").classList.add("blur");
    document.querySelector("#game").classList.remove("show");

    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#newGame").classList.add("active");
    document.querySelector("#newGame").classList.add("shake");

    document.querySelector("#game").removeEventListener("animationend", genstartStone);
    //document.querySelector("#tidenGaar").addEventListener("animationen", timeLeft);
    //remove raising
    document.querySelector("#stone0").classList.remove("raising");
    document.querySelector("#stone1").classList.remove("raising");
    document.querySelector("#stone2").classList.remove("raising");
    document.querySelector("#stone3").classList.remove("raising");
    document.querySelector("#stone4").classList.remove("raising");
    document.querySelector("#stone5").classList.remove("raising");
    document.querySelector("#stone6").classList.remove("raising");
    document.querySelector("#stone7").classList.remove("raising");
    document.querySelector("#stone8").classList.remove("raising");
    document.querySelector("#stone9").classList.remove("raising");
    document.querySelector("#stone10").classList.remove("raising");
    document.querySelector("#stone11").classList.remove("raising");
    document.querySelector("#stone12").classList.remove("raising");
    document.querySelector("#stone13").classList.remove("raising");
    document.querySelector("#stone14").classList.remove("raising");
    document.querySelector("#stone15").classList.remove("raising");
    document.querySelector("#stone16").classList.remove("raising");
    document.querySelector("#stone17").classList.remove("raising");
    document.querySelector("#stone18").classList.remove("raising");
    document.querySelector("#stone19").classList.remove("raising");
    document.querySelector("#stone19").classList.remove("raising");
    document.querySelector("#stone20").classList.remove("raising");
    document.querySelector("#stone21").classList.remove("raising");
    document.querySelector("#stone22").classList.remove("raising");
    //

}
//function genStartFc() {
// console.log("replay");
// document.location.href = "";
//}
