let forgotForm = document.getElementById("forgotForm");

forgotForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let emailInput = document.getElementById("resetEmail");
    let passwordInput = document.getElementById("newPassword");

    let emailError = document.getElementById("resetEmailError");
    let passwordError = document.getElementById("newPasswordError");
    let resetMessage = document.getElementById("resetMessage");

    let email = emailInput.value.trim();
    let newPassword = passwordInput.value;

    emailError.textContent = "";
    passwordError.textContent = "";
    resetMessage.textContent = "";

    emailInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-invalid");

    if (email === "") {
        emailError.textContent = "Email cannot be empty";
        emailInput.classList.add("is-invalid");
        return;
    }

    if (newPassword === "") {
        passwordError.textContent = "Password cannot be empty";
        passwordInput.classList.add("is-invalid");
        return;
    }

    if (newPassword.length < 8) {
        passwordError.textContent =
            "Password must be at least 8 characters";

        passwordInput.classList.add("is-invalid");
        return;
    }

    let savedEmail = localStorage.getItem("SignInMail");

    if (email !== savedEmail) {
        emailError.textContent = "Email was not found.";
        emailInput.classList.add("is-invalid");
        return;
    }

    localStorage.setItem("SignInPassword", newPassword);

    resetMessage.textContent =
        "Password successfully changed. You can now login.";

    emailInput.value = "";
    passwordInput.value = "";
});