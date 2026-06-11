// Seleziono lo span solo una volta (va bene farlo qui)
const output = document.querySelector("#risultato");

// Ascolto il click
document.querySelector(".lancio_dado").addEventListener("click", roll);

function roll() {
  const a = Math.floor(Math.random() * 6) + 1; // genera numero casuale
  output.textContent = a; // lo mostra a schermo

  const diceImg = document.querySelector("#dice-img");

  switch (a) {
    case 1:
      diceImg.src = "img/1.png";
      break;
    case 2:
      diceImg.src = "img/2.png";
      break;
    case 3:
      diceImg.src = "img/3.png";
      break;
    case 4:
      diceImg.src = "img/4.png";
      break;
    case 5:
      diceImg.src = "img/5.png";
      break;
    case 6:
      diceImg.src = "img/6.png";
      break;
  }
}
