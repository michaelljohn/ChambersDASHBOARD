let storedName = localStorage.getItem("name");

let userName = document.getElementById("userName");

if (storedName) {
    userName.textContent = storedName;
} else {
    userName.textContent = "Guest";
}