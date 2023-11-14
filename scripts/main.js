function welcome() {
  let userName;
  do {
    userName = prompt("我该如何称呼您呢？ (*/ω＼*)");
    if (!userName) {
      alert("不规范的回答哟");
    } else {
      if (userName == 6) {
        break;
      } else {
        alert(`您好 ${userName}\n您是怎么找到这的？！ (＃°Д°)`);
        // 模板字面量
      }
    }
  } while (!userName);
}
function validate() {
  let username = document.getElementById("username").value;
  // getElementById按id选取元素
  let password = document.getElementById("password").value;
  if (username == "nuofang" && password == "9919") {
    alert("登录成功(*^▽^*)");
    window.location.href = "/lab/labIndex.html";
    // 跳转网页
  } else {
    alert("哎呀不对呢...");
  }
}

window.onload = function () {
  //window.onload在页面加载完后执行一次
  welcome();
};
