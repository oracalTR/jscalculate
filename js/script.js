const startButton = document.querySelector('.start-button'),
    firstScreen = document.querySelector('.first-screen'),
    mainForm = document.querySelector('.main-form'),
    endButton = document.querySelector('.end-button'),
    formCalculate = document.querySelector('.form-calculate'),
    total = document.querySelector('.total'),
    fastRange = document.querySelector('.fast-range')


function showElem(id) {
    id.style.display = 'block';
};

function hideElem(id) {
    id.style.display = 'none'
}

function formSend(event) {
    for ( const elem of event) {
        if ( elem.tagName.toLowerCase() === 'fieldset') {
                hideElem(elem)
            }
    }
    showElem(total)
}

function handlerCallBackForm() {
    const target = event.target
    if ( target.classList.contains('want-faster') ) {
        target.checked ? showElem(fastRange) : hideElem(fastRange)
        // if (target.checked) {
        //     showElem(fastRange)
        // } else {
        //     hideElem(fastRange)
        // }
    }
}

startButton.addEventListener('click', () => {
    hideElem(firstScreen)
    showElem(mainForm)

})

endButton.addEventListener('click', () => {
    formSend(formCalculate.elements)
})

formCalculate.addEventListener('change', handlerCallBackForm)