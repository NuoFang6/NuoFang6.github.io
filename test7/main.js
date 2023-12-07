function draw() {
  let canvas = document.getElementById("ctx1");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);
  } else {
    canvas.textContent = "不支持";
  }
}
