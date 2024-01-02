function signUp() {
  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;
  localStorage.setItem(username, password);
  localStorage.setItem("first", false);
  var rect = document.getElementById("submit").getBoundingClientRect();
  var checkMark = document.getElementById("打勾");
  checkMark.style.position = "absolute";
  checkMark.style.top = window.scrollY + rect.top + "px";
  checkMark.style.left = window.scrollX + rect.left + "px";
  // 页面的滚动偏移
  document.getElementById("打勾").style.zIndex = 9;
  document.getElementById("submit").style.opacity = "0";
  document.querySelector('input[type="checkbox"]').checked = true;
  setTimeout(() => {
    showLogin();
    setTimeout(() => {
      document.getElementById("打勾").style.zIndex = -9;
      document.querySelector('input[type="checkbox"]').checked = false;
      document.getElementById("submit").style.opacity = "1";
    }, 200);
  }, 2500);
  document.getElementById("username").value = username;
  document.getElementById("password").value = password;
}
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var correctPassword = localStorage.getItem(username);
  if (password == correctPassword) {
    showSuccess();
  } else {
    fail();
  }
}
function showSuccess() {
  document.getElementById("loginForm").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("success").style.display = "flex";
    setTimeout(function () {
      document.getElementById("success").style.opacity = "1";
    }, 300);
  }, 300);
}
function logout() {
  document.getElementById("success").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("success").style.display = "none";
    document.getElementById("loginForm").style.display = "flex";
    setTimeout(function () {
      document.getElementById("loginForm").style.opacity = "1";
    }, 350);
  }, 350);
}
function showRetrieve() {
  document.getElementById("h").innerText = "找回密码";
  showRegister();
}
function fail() {
  var input = document.getElementById("password");
  input.style.borderBottom = "2px solid red";
  input.style.color = "red";
  input.classList.add("shake");
  document.getElementById("LoginSubmit").value = "密码错误！";
  setTimeout(() => {
    document.getElementById("LoginSubmit").value = "Login";
    input.style.borderBottom = "";
    input.style.color = "";
    input.classList.remove("shake");
  }, 2000);
}
