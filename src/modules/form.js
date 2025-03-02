
const inputName = document.getElementById('userNameInput')
const inputLastName = document.getElementById('userLastNameInput')
const inputEmail = document.getElementById('inputUserEmail')
const inputSubject = document.getElementById('inputUserSubject')
const inputMessage = document.getElementById('inputUserMessage')
const btnForm = document.querySelector('.about-form__button-btn')



let userName;
let userLastName;
let userEmail;
let userSubject;
let userMessage;



btnForm.addEventListener('click', function() {
    if (inputName.value === '') {
        console.error('пустая строка');
        return;
    }

    userName = pushData(inputName)
    userLastName = pushData(inputLastName)
    userEmail = pushData(inputEmail)
    userSubject = pushData(inputSubject)
    userMessage = pushData(inputMessage)

    if (userName !== null) {
        userData.name = userName; 
    }

    if (userLastName !== null) {
        userData.lastName = userLastName; 
    }

    if (userEmail !== null) {
        userData.email = userEmail 
    }

    if (userSubject !== null) {
        userData.subkect = userSubject 
    }

    if (userMessage !== null) {
        userData.message = userMessage 
    }
    console.log(userData);

    inputName.value = ''
    inputLastName.value = ''
    inputEmail.value = ''
    inputSubject.value = ''
    inputMessage.value = ''

    return userData
})

function pushData(input) {
    return input.value
}

const userData = {

}


console.log(userData);