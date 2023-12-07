const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
var btn = document.querySelector("button");
var section = document.querySelector("section");
btn.addEventListener("click", function() { chooseName(names); });

function chooseName(names) {
  section.innerHTML = " ";
  const para = document.createElement("p");
  para.textContent = names[Math.floor(Math.random() * names.length)];
  section.appendChild(para);
}
