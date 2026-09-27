let forms = document.getElementById('formField');

forms.addEventListener("submit", function(events) {

    events.preventDefault();

    let nameInput = document.getElementById("name");
    let mailInput = document.getElementById("SignInMail");
    let passwordInput = document.getElementById("SignInPassword");

   
    let name = nameInput.value;
    let mail = mailInput.value;
    let password = passwordInput.value;

   
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");


    function validateForm() {

        if (name === "") {
            nameError.textContent = "Name cannot be empty";
            nameInput.classList.add("is-invalid");
            return false;
        }

        if (mail === "") {
            emailError.textContent = "Email cannot be empty";
            mailInput.classList.add("is-invalid");
            return false;

        } else if (!mail.includes("@")) {
            emailError.textContent = "Email must be valid";
            mailInput.classList.add("is-invalid");
            return false;
        }


        if (password === "") {
            passwordError.textContent = "Password cannot be empty";
            passwordInput.classList.add("is-invalid");
            return false;

        } else if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters";
            passwordInput.classList.add("is-invalid");
            return false;

        } else if (!/[a-z]/.test(password)) {
            passwordError.textContent = "Password must contain a lowercase letter";
            passwordInput.classList.add("is-invalid");
            return false;

        } else if (!/[A-Z]/.test(password)) {
            passwordError.textContent = "Password must contain an uppercase letter";
            passwordInput.classList.add("is-invalid");
            return false;
        }

        return true;
    }


    if (validateForm()) {

        localStorage.setItem("name", name);
        localStorage.setItem("SignInMail", mail);
        localStorage.setItem("SignInPassword", password);

        console.log(localStorage.getItem("name"));
        console.log(localStorage.getItem("SignInMail"));
        console.log(localStorage.getItem("SignInPassword"));    

        window.location.href = "./assets/pages/login.html";

    }

});