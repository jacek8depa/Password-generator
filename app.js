const sliderEl = document.querySelector(".slider")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;

    sliderValue.textContent = tempSliderValue;

    const progress = (tempSliderValue / sliderEl.max) * 100;
    console.log(progress)

    sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${progress}%, #18171F ${progress}%)`;
})



const showNewPassword = document.querySelector("#new-password")
const upperCaseCheckBox = document.querySelector('.uppercase')
const lowerCaseCheckBox = document.querySelector('.lowercase')
const numberBox = document.querySelector('.numbers')
const symbolsBox = document.querySelector('.symbols')
const ganerateButton = document.querySelector('.generate-btn')

let passwordString = ''
let newPassword = ''
const smallLetters = 'abcdefghijklmnoprtsuwxyz'
const bigLetters = 'ABCDEFGHIJKLMNOPRSTUWXYZ'
const numbers = '1234567890'
const symbols = '!@#$%^&*()_+-=[]{};:"/?.>,<'

function makeNewPassword() {
    passwordString = ''
    newPassword = ''
    if (upperCaseCheckBox.checked) {
        passwordString = passwordString + bigLetters
    }
    if (lowerCaseCheckBox.checked) {
        passwordString = passwordString + smallLetters
    }
    if (numberBox.checked) {
        passwordString = passwordString + numbers
    }
    if (symbolsBox.checked) {
        passwordString = passwordString + symbols
    }
    for (let i = 0; i < sliderEl.value; i++) {
        newPassword = newPassword + passwordString[Math.floor(Math.random() * passwordString.length)]
    }
    if (passwordString !== '') {
        showNewPassword.innerHTML = newPassword
    }
}
const empty = document.querySelector('.scale-empty')
const toWeak = document.querySelector('.scale-to-weak')
const weak = document.querySelector('.scale-weak')
const medium = document.querySelector('.scale-medium')
const strong = document.querySelector('.scale-strong')
const allScale = document.querySelectorAll('.scale')
const level = document.querySelector('#level')
let textLevel = ''

function updateStrengthBar() {
    allScale.forEach((scale) => {
        scale.style.display = 'none'
    })
    if (sliderEl.value < 5) {
        toWeak.style.display = 'flex'
        textLevel = 'TO WEAK!'
    } else if (sliderEl.value >= 5 && sliderEl.value <= 7) {
        weak.style.display = 'flex'
        textLevel = 'WEAK'
    } else if (sliderEl.value > 7 && sliderEl.value <= 9) {
        medium.style.display = 'flex'
        textLevel = 'MEDIUM'
    } else if (sliderEl.value > 9) {
        strong.style.display = 'flex'
        textLevel = 'STRONG'
    }

}

ganerateButton.addEventListener('click', () => {
    updateStrengthBar();
    makeNewPassword();
    level.innerHTML = textLevel
    showNewPassword.style.opacity = '1'

})

const copyIcon = document.getElementById("copy");


copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(showNewPassword.textContent)
        .then(() => console.log("Password copied to clipboard"))
        .catch(err => console.error("Could not copy password: ", err));
});

