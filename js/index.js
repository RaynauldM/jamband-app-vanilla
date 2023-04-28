const btns = document.getElementsByClassName("btns");
const header = document.querySelector("header");
let hh2 = header.querySelector("h2");
let backGround = document.getElementById("background");

function handleClick(event) {
  const { id } = event.target;
  switch (id) {
    case "setBtn":
      document.location = "../html/setlijstPage.html";
      break;
    case "sendBtn":
      document.location = "../html/aanmeldPage.html";
      break;
    case "backBtn":
      document.location = "../html/index.html";
      break;
    case "infoBtn":
      document.location = "../html/informatiePage.html";
      break;
  }
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClick);
}

const thisUrl = window.location.href;

if (thisUrl.includes("/index.html")) {
  hh2.textContent = "--Welkom--";
} else if (thisUrl.includes("/setlijstPage.html")) {
  hh2.textContent = "--Setlijst--";
  backGround.style.backgroundImage = 'url("../images/stockPhoto1.png")';
  backGround.style.backgroundSize = "cover";
  backGround.style.backgroundPosition = "32% 40%";
} else if (thisUrl.includes("/aanmeldPage.html")) {
  hh2.textContent = "--Aanmelden--";
} else {
  hh2.textContent = "--Informatie--";
}
