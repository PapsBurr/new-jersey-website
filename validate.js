let emailForm = document.querySelector("#contact");
emailForm.addEventListener("submit", checkForm);

function checkForm(event) {
    let email1 = document.querySelector("#email");
    let email2 = document.querySelector("#confemail");
    let fn = document.querySelector("#first");

    if (email1.value != email2.value) {
        alert("Emails do not match.");
        event.preventDefault();
    }
}