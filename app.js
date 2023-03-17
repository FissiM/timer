const time = document.querySelector("#timer");
function displayTime() {
  let d = new Date();
  let hours = `${d.getHours() < 9 ? "0" + d.getHours() : d.getHours()}`;
  let minutes = `${d.getMinutes() < 9 ? "0" + d.getMinutes() : d.getMinutes()}`;
  let seconds = `${
    d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
  }`;

  time.innerHTML = "";
  time.innerHTML = ` <h1> ${hours} :  ${minutes} : ${seconds}</h1>`;
}
setInterval(displayTime, 1000);
