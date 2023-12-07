var output = document.querySelector(".output");
for (let i = 10; i >= 0; i--) {
  var para = document.createElement("p");
  switch (i) {
    case 10:
      para.textContent = "Countdown 10";
      break;
    case 0:
      para.textContent = "Blast off！";
      break;
    default:
      para.textContent = i;
      break;
  }
  output.appendChild(para);
}
