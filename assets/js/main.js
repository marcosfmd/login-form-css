const svg = document.querySelectorAll(".form__svg")

const label = document.querySelector(".form__input")

function focusInput () {
    label.focus().style.border = '3px solid var(--primary-color)'

}

focusInput()