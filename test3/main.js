var people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

var admitted = document.querySelector(".admitted");
var refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";
for (let i = 0; i < people.length; i++) {
  var tmp = people[i];
  if (tmp == "Phil" || tmp == "Lola") {
    refused.textContent += (tmp+" ");
    continue;
  } else {
    admitted.textContent += (tmp+" ");
  }
}
