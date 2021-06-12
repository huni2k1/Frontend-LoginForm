function validInput() {
    var email;
    var password;
    email = document.getElementById("Email").value;
    password = document.getElementById("Password").value;
    if (email == "" || password == "") {
        document.getElementById("invalid-input").style.display = "block";
    }
    else {
        document.getElementById("invalid-input").style.display = "none";
        document.getElementById("log-in-button").style.display = "none";

    }
}
function setUnderline() {
    document.getElementById("sign-up-button").style.textDecoration = "underline";
}
function setNone() {
    document.getElementById("sign-up-button").style.textDecoration = "none";
}
function popRegistration() {
    document.getElementById("login-window").style.display = "none";
    document.getElementById("registration-window").style.display = "flex";
}
function validateRegister() {
    var fullname = document.getElementById("fullname").value;
    if (fullname == "")
        document.getElementById("name-warning").style.display = "block";
    var email = document.getElementById("regis-email").value;
    if (email == "")
        document.getElementById("email-warning").style.display = "block";
    var password = document.getElementById("regis-password").value;
    if (password == "")
        document.getElementById("password-warning").style.display = "block";
    var confirmpassword = document.getElementById("confirm-password").value;
    if (password != confirmpassword)
        document.getElementById("confirmpassword-warning").style.display = "block";

}