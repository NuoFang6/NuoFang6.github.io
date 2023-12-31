function signUp() {
  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;
  localStorage.setItem(username, password);
  localStorage.setItem("first", false);
  alert("注册成功");
}
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var correctPassword = localStorage.getItem(username);
  if (password == correctPassword) {
    showSuccess();
  } else {
    alert("失败");
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
