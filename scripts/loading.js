// 页面加载完成后执行
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loadingFade();
  }
};

function loadingFade() {
  var loadingBackground = document.querySelector(".loadMask");
  /* 触发透明度的过渡效果 */
  loadingBackground.style.opacity = 0;

  /* 当过渡完成后移除元素 */
  loadingBackground.addEventListener("transitionend", function () {
    loadingBackground.remove();
  });
  // 不注册登录
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  localStorage.setItem(username, password);
}
