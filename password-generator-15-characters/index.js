const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

const PASSWORD_LENGTH = 15;

function generatePassword() {
  let password = "";

  for (let i = 0; i < PASSWORD_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

function pswgenerator() {
  const pw1 = generatePassword();
  const pw2 = generatePassword();

  password1.textContent = pw1;
  password2.textContent = pw2;

  password1.dataset.password = pw1;
  password2.dataset.password = pw2;
}

document.querySelectorAll(".psw-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const password = btn.dataset.password;

    if (!password) return;

    navigator.clipboard.writeText(password);

    const originalText = btn.textContent;
    btn.textContent = "Copied!";

    setTimeout(() => {
      btn.textContent = originalText;
    }, 800);
  });
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});
