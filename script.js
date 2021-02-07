let rn = Math.floor(Math.random() * 19 + 1);
document.querySelector(".revealer .back").textContent = rn;

let mi = 1,
    ma = 20,
    score = 12;
let i = document.querySelector("input");
let sug = document.querySelector(".suggestion");
let scr = document.querySelector(".score");
let ib = document.querySelector(".input-box div");

function handler() {
    let val = Number(i.value);
    if (String(val) === "NaN") {
        sug.textContent = "Please enter a valid number ";
        sug.className = "sug-common suggestion-invalid";
    } else if (val < mi || val > ma) {
        sug.textContent = `Enter number between ${mi} and ${ma}`;
        sug.className = "sug-common suggestion-invalid";
    } else if (val < rn) {
        score -= 2;
        if (checkscore()) {
            return;
        }
        sug.textContent = "Enter higher number";
        sug.className = "sug-common suggestion-valid";
    } else if (val > rn) {
        score -= 2;
        if (checkscore()) {
            return;
        }
        sug.textContent = "Enter smaller number";
        sug.className = "sug-common suggestion-valid";
    } else {
        sug.innerHTML = `You won the game !!!<br>SCORE : ${score}`;
        sug.className = "sug-common suggestion-correct";
        revealer();
        ib.style.display = "inline-block";
    }
    scr.textContent = score;
}
function checkscore() {
    if (score < 1) {
        sug.textContent = "GAME OVER";
        sug.style.color = " rgb(255, 107, 107)";
        sug.className = "sug-common suggestion-invalid";
        scr.textContent = score;
        ib.style.display = "inline-block";
        revealer();
        return true;
    }
    return false;
}
function revealer() {
    document.querySelector(".revealer .front").style.transform =
        "rotateY(-180deg)";
    document.querySelector(".revealer .back").style.transform = "rotateY(0deg)";
}
