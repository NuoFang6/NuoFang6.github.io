const customName = document.getElementById("customname");
// customName 是对“输入自定义的名字”文本框的引用
const randomize = document.querySelector(".randomize");
// randomize 是对“随机生成笑话”按钮的引用
const story = document.querySelector(".story");
// story 是对 HTML 底部的、准备存放笑话的 <p> 元素的引用
let storyText =
  "今天气温 34 度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";
let insertX = ["怪兽威利", "大老爹", "圣诞老人"];
let insertY = ["肯德基", "迪士尼乐园", "白宫"];
let insertZ = ["自燃了", "在人行道化成了一坨泥", "变成一条鼻涕虫爬走了"];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
  // randomValueFromArray() 取一个数组作参数，随机返回数组中的一个元素
}
randomize.addEventListener("click", result);

function result() {
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let newStory = storyText;

  if (customName.value !== "") {
    newStory = newStory.replace(":inserta:", customName.value);
  } else {
    newStory = newStory.replace(":inserta:", xItem);
  }

  if (document.getElementById("美制").checked) {
    let temperature = Math.round(94);
    let weight = Math.round(300);
    newStory = newStory.replace("34", temperature);
    newStory = newStory.replace("130", weight);
  }

  newStory = newStory.replace(":insertb:", yItem);
  newStory = newStory.replace(":insertc:", zItem);
  newStory = newStory.replace(":inserta:", xItem);
  story.textContent = newStory;
  story.style.visibility = "visible";
}
