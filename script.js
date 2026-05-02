function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    message.style.color = "red";
    message.innerText = "Invalid Email Format!";
    return;
  }

  // Password validation
  if (password.length < 6) {
    message.style.color = "red";
    message.innerText = "Password must be at least 6 characters!";
    return;
  }

  // Success
  message.style.color = "green";
  message.innerText = "Login Successful!";

  localStorage.setItem("userEmail", email);

  setTimeout(() => {
    alert("Welcome " + email);
  }, 500);
}

// Auto login message
window.onload = function() {
  let user = localStorage.getItem("userEmail");
  if (user) {
    alert("Welcome back " + user);
  }
};
