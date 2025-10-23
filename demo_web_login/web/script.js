document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (user === "admin" && pass === "123") {
    message.style.color = "green";
    message.textContent = "Đăng nhập thành công ✅";
  } else {
    message.style.color = "red";
    message.textContent = "Sai tài khoản hoặc mật khẩu ❌";
  }
});