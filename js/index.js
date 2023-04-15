const test = document.querySelector("h3");
const btns = document.getElementsByClassName("btns");

function handleClick(event) {
  const { id } = event.target;
  switch (id) {
    case "setBtn":
      document.location = "../html/setlijstPage.html";
      break;
    case "sendBtn":
      document.location = "../html/aanmeldPage.html";
  }
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClick);
}
