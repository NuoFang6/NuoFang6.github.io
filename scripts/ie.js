// 检测是否是IE浏览器
function isIE() {
  var userAgent = navigator.userAgent;
  return userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1;
}

// 兼容早期版本的IE浏览器
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onload" : "DOMContentLoaded";

eventer(
  messageEvent,
  function () {
    if (isIE()) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "style/ie.css"; // 你的IE专用CSS文件路径
      document.head.appendChild(link);
      var scripts = document.querySelectorAll(".notie");
      while (scripts.length > 0) {
        scripts[0].parentNode.removeChild(scripts[0]);
      }
    }
  },
  false
);
