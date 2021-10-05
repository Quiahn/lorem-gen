'use strict'
window.onload = () => {
    // get form by id then add submit event listener that calls on submit function
    const form = document.getElementById('loremForm')
    form.addEventListener('submit', onSubmit)
}

const onSubmit = e => {
    e.preventDefault()

    // get lorem p tag by id then erase beginning blank characters
    const lorem = document.getElementById('lorem')
    const loremText = lorem.innerText.substr(9, lorem.innerText.length)
    // get number value using event
    const num = e.target.num.value
    // copy lorem text from 0 to the number that was given
    navigator.clipboard.writeText(loremText.substr(0, num))
}

// const copyText = (loremText, num) => {
//     navigator.clipboard.writeText(loremText.substr(0, num));
// }