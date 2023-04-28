import * as myData from "../data/data.js";

const when = document.getElementById("when");
const who = document.getElementById("who");

when.textContent = myData.whenData;

myData.whoData.forEach((i) => (who.innerHTML += `<li>${i}<li>`));
