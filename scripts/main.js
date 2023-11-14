function welcome() {
  let userName;
  do {
    userName = prompt("我该如何称呼您呢？ (*/ω＼*)");
    if (!userName) {
      alert("不规范的回答哟");
    } else {
      localStorage.setItem("userName", userName);
      alert("您好" + userName + "\n您是怎么找到这的？！ (＃°Д°)");
    }
  } while (!userName);
}
function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "nuofang" && password == "9919") {
    alert("登录成功(*^▽^*)");
  } else {
    alert("哎呀不对呢...");
  }
}

window.onload = function () {
  //window.onload在页面加载完后执行一次
  welcome();
};
