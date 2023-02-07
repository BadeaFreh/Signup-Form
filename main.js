
const submitBtn = document.getElementById("submit-btn")
const errorMessage = document.getElementById("error-message")
const form = document.getElementById("my-form")

submitBtn.addEventListener("click", showError)

function showError () {

    const uname = document.getElementById("name-input").value
    const salary = parseInt(document.getElementById("salary-input").value)
    const birthday = document.getElementById("birthday-input").value
    const phone = document.getElementById("phone-input").value

    if (uname.length <= 2) {
        errorMessage.innerHTML = "Name should be more than 2 chars"
    }

    else if (!salary || salary <= 10000 || salary >= 16000) {
        errorMessage.innerHTML = "Salary must be between 10000 and 16000"
    }

    else if (!birthday) {
        errorMessage.innerHTML = "You should fill the birthday field"
    }

    else if (phone.length !== 10) {
        errorMessage.innerHTML = "Phone number is invalid"
    }

    else {
        errorMessage.innerHTML = ""
        form.style.display = "none"
        alert("Welcome, " + uname)
    }
}
