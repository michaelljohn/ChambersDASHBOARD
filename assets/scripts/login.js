let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let emailInput = document.getElementById("loginEmail");
    let passwordInput = document.getElementById("loginPassword");

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let loginError = document.getElementById("loginError");

    let email = emailInput.value.trim();
    let password = passwordInput.value;

    emailError.textContent = "";
    passwordError.textContent = "";
    loginError.textContent = "";

    emailInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-invalid");

    if (email === "") {
        emailError.textContent = "Email cannot be empty";
        emailInput.classList.add("is-invalid");
        return;
    }

    if (password === "") {
        passwordError.textContent = "Password cannot be empty";
        passwordInput.classList.add("is-invalid");
        return;
    }

    let savedEmail = localStorage.getItem("SignInMail");
    let savedPassword = localStorage.getItem("SignInPassword");

    if (email !== savedEmail || password !== savedPassword) {
        loginError.textContent = "Incorrect email or password.";
        return;
    }

    localStorage.setItem("loggedIn", "true");

    window.location.href = "./dashboard.html";
});