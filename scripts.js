const form = document.getElementById("heroForm");
const victories = document.getElementById("victories");
const defeats = document.getElementById("defeats");
const message = document.getElementById("message");
const bg = document.getElementById("bg");

function getBalance(victoriesValue, defeatsValue) {
  return victoriesValue - defeatsValue;
}

function getLevel(value) {
  if (value <= 10) return "FERRO";
  else if (value <= 20) return "BRONZE";
  else if (value <= 50) return "PRATA";
  else if (value <= 80) return "OURO";
  else if (value <= 90) return "DIAMANTE";
  else if (value <= 100) return "LENDARIO";
  else return "IMORTAL";
}

function formSubmit(event) {
  event.preventDefault();
  const balance = getBalance(victories.value, defeats.value);
  const level = getLevel(balance);
  message.innerHTML = `O Herói tem de saldo de <strong>${balance}</strong>, está no nível<br><strong>${level}</strong>`;
  bg.setAttribute("class", level.toLowerCase());
}

form.setAttribute("onsubmit", "formSubmit(event)");
