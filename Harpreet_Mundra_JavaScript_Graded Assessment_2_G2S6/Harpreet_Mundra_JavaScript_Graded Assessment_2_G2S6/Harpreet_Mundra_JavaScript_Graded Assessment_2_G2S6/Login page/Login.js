function LoginValidateData() {
  let userName = document.getElementById("u_name").value;
  let userPassword = document.getElementById("u_password").value;

  localStorage.setItem("userName1", "mehdi@123");
  localStorage.setItem("userPassword1", "MeHdI@123");
  localStorage.setItem("userName2", "greatlearning@gmail.com");
  localStorage.setItem("userPassword2", "#1GreatLearning");

  let userName1 = localStorage.getItem("userName1");
  let userPassword1 = localStorage.getItem("userPassword1");
  let userName2 = localStorage.getItem("userName2");
  let userPassword2 = localStorage.getItem("userPassword2");

  if (userName === userName1 && userPassword === userPassword1) {
    window.location.href = "../Resume Page/Resume.html";
  } else if (userName === userName2 && userPassword === userPassword2) {
    window.location.href = "../Resume Page/Resume.html";
  } else {
    alert("Invalid username/password !");
  }
}

function restrictBackpage() {
  window.history.forward();
}
setTimeout("restrictBackpage()", 0);
window.onunload = function () {
  null;
};

var typed1 = new Typed("#u_name", {
  strings: ["enter username", "mehdi@123"],
  typeSpeed: 100,
  backSpeed: 100,
  attr: "placeholder",
  bindInputFocusEvents: false,
  loop: true,
});

var typed2 = new Typed("#u_password", {
  strings: ["enter password", "MeHdI@123"],
  typeSpeed: 180,
  backSpeed: 110,
  attr: "placeholder",
  bindInputFocusEvents: false,
  loop: true,
});

let password = document.getElementById("u_password");
let visibility = document.getElementById("visibility");

let hidden = true;
visibility.addEventListener("click", function () {
  if (hidden) {
    password.setAttribute("type", "text");
    visibility.innerHTML = "visibility";
  } else {
    password.setAttribute("type", "password");
    visibility.innerHTML = "visibility_off";
  }
  hidden = !hidden;
});
