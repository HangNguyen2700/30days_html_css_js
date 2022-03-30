var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(inputArray) {
    let isEmptyError = false;

    inputArray = inputArray.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Form muss not be empty')
        } else {
            showSuccess(input)
        }
    })

    return isEmptyError
}

function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if (isEmailError) {
        showError(input, 'Email invalid')
    } else {
        showSuccess(input)
    }

    return isEmailError
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()

    if (input.value.length < min) {
        showError(input, `Must be at least ${min} characters`)
        return true
    } else if (input.value.length > max) {
        showError(input, `Must be at most ${max} characters`)
        return true
    }

    return false // dk bo sung cho emtyError -> da co showSuccess tu emptyError roi -> k can them
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Password confirmation does not match')
        return true
    }
    return false
}

form.onsubmit = function (e) {
    e.preventDefault() // k co dong nay -> moi lan submit -> reload trang

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)

    let isUsernameLengthError = checkLengthError(username, 3, 10)
    let isPasswordLengthError = checkLengthError(password, 3, 10)

    let isMatchPasswordError = checkMatchPasswordError(password, confirmPassword)

    if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchPasswordError){
        // do nothing
    } else {
        // logic, call API, ...
    }
}
