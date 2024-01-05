// function welcome() {
//   let userName;
//   do {
//     userName = prompt("我该如何称呼您呢？ (*/ω＼*)");
//     if (!userName) {
//       alert("不规范的回答哟");
//     } else {
//       if (userName == 6) {
//         break;
//       } else {
//         alert(`您好 ${userName}\n您是怎么找到这的？！ (＃°Д°)`);
//         // 模板字面量
//       }
//     }
//   } while (!userName);
// }
// function validate() {
//   let username = document.getElementById("username").value;
//   // getElementById按id选取元素
//   let password = document.getElementById("password").value;
//   if (username == "nuofang" && password == "9919") {
//     alert("登录成功(*^▽^*)");
//     window.location.href = "/lab/labIndex.html";
//     // 跳转网页
//   } else {
//     alert("哎呀不对呢...");
//   }
// }
// window.onload = function () {
//   //window.onload在页面加载完后执行一次
//   welcome();
// };
// document.onreadystatechange = function () {
//   if (document.readyState == "complete") {
//     if (localStorage.getItem("first" != false)) {
//     }
//   }
// };

// ⬆️⬆️之前测试用的，请忽略

function showLogin() {
  document.getElementById("registerForm").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("h").innerText = "注 册";
    document.getElementById("loginForm").style.display = "flex";
    setTimeout(function () {
      document.getElementById("loginForm").style.opacity = "1";
    }, 350);
  }, 350);
}

function showRegister() {
  document.getElementById("loginForm").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "flex";
    setTimeout(function () {
      document.getElementById("registerForm").style.opacity = "1";
    }, 300);
  }, 300);
}
document.getElementById("refresh").addEventListener("click", function () {
  var rfimg = document.getElementById("rfimg");
  rfimg.classList.add("rotate");
  setTimeout(function () {
    rfimg.classList.remove("rotate");
  }, 1000);
  //重新获取
  var timestamp = new Date().getTime();
  var css =
    ".mainbody .left::before { background-image: url(https://t.mwm.moe/mp?" +
    timestamp +
    "); }";
  var style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName("head")[0].appendChild(style);
});
