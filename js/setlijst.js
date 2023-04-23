import * as myData from "../data/data.js";

const setlistOutput = document.getElementById("setlistOutput");

let output = "";

myData.setListArr.forEach((element) => (output += `<li>${element}</li>`));

setlistOutput.innerHTML = output;
