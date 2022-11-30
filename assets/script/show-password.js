function showPassword() {
    var temp = document.getElementById("senha");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}