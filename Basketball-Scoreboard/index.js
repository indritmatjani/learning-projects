let homescore = 0;
let guestscore = 0;

// Elementi <p> per visualizzare il punteggio
const scoreHomeEl = document.getElementById("score-home-display");
const scoreGuestEl = document.getElementById("score-guest-display");

// Elementi DIV genitore per applicare la classe .leader
const homeBoardContainer = scoreHomeEl.parentElement;
const guestBoardContainer = scoreGuestEl.parentElement;

// Funzione Centrale: Controlla e applica la classe leader
function checkLeader() {
  homeBoardContainer.classList.remove("leader");
  guestBoardContainer.classList.remove("leader");

  if (homescore > guestscore) {
    homeBoardContainer.classList.add("leader");
  } else if (guestscore > homescore) {
    guestBoardContainer.classList.add("leader");
  }
}

// --- Funzioni HOME ---

function punto1home() {
  homescore += 1;
  scoreHomeEl.innerText = homescore;
  checkLeader(); // CHIAMATA AGGIUNTA
}

function punto2home() {
  homescore += 2;
  scoreHomeEl.innerText = homescore;
  checkLeader(); // CHIAMATA AGGIUNTA
}

function punto3home() {
  homescore += 3;
  scoreHomeEl.innerText = homescore;
  checkLeader(); // CHIAMATA AGGIUNTA
}

// --- Funzioni GUEST ---

function punto1guest() {
  guestscore += 1;
  scoreGuestEl.innerText = guestscore;
  checkLeader(); // CHIAMATA AGGIUNTA
}

function punto2guest() {
  guestscore += 2;
  scoreGuestEl.innerText = guestscore;
  checkLeader(); // CHIAMATA AGGIUNTA
}

function punto3guest() {
  guestscore += 3;
  scoreGuestEl.innerText = guestscore;
  checkLeader(); // CHIAMATA AGGIUNTA
}

// Funzione di Reset
function restart() {
  homescore = 0;
  guestscore = 0;
  scoreHomeEl.innerText = 0;
  scoreGuestEl.innerText = 0;

  // Rimuove l'effetto leader al reset (AGGIUNTO)
  homeBoardContainer.classList.remove("leader");
  guestBoardContainer.classList.remove("leader");
}
