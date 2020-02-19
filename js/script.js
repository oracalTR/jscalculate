const DATA = {
    whichSite: ['landing', 'multiPage', 'onlineStore'],
    price: [4000, 8000, 26000],
    desktopTemplates: [50, 40, 30],
    adapt: 20,
    mobileTemplates: 15,
    editable: 10,
    metrikaYandex: [500, 1000, 2000],
    analyticsGoogle: [850, 1350, 3000],
    sendOrder: 500,
    deadLine: [[2, 7], [3, 10], [7, 14]],
    deadLinePercent: [20, 17, 15]

};

const startButton = document.querySelector('.start-button'),
    firstScreen = document.querySelector('.first-screen'),
    mainForm = document.querySelector('.main-form'),
    endButton = document.querySelector('.end-button'),
    formCalculate = document.querySelector('.form-calculate'),
    total = document.querySelector('.total'),
    fastRange = document.querySelector('.fast-range'),
    totalPrice = document.querySelector('.total_price__sum'),
    adapt = document.querySelector('#adapt'),
    templateMobile = document.querySelector('#mobileTemplates');


function showElem(id) {
    id.style.display = 'block';
}

function hideElem(id) {
    id.style.display = 'none';
}

function formSend(event) {
    for ( const elem of event) {
        if ( elem.tagName.toLowerCase() === 'fieldset') {
                hideElem(elem);
            }
    }
    showElem(total);
}

function priceCalculation(elem) {
    let result = 0,
        index = 0,
        options = [];

    if (!adapt.checked) {
        templateMobile.checked = false;
    }

    if (elem.name === 'whichSite') {
        for (const item of formCalculate.elements) {
            if (item.type === 'checkbox') {
                item.checked = false;
            }
        }
        hideElem(fastRange);
    }

    for (const item of formCalculate.elements) {
        if ( item.name === 'whichSite' && item.checked ) {
            index = (DATA.whichSite.indexOf(item.value));
        } else if (item.classList.contains('calc-handler') && item.checked) {
           options.push(item.value);
        }
    }

    options.forEach(i => {
        if (typeof DATA[i] === 'number') {
            if (i === 'sendOrder') {
                result += data[i]
            } else {
                result += DATA.price[index] * DATA[i] / 100;
            } 
        } else if (i === 'desktopTemplates') {
            result += DATA.price[index] * DATA[i][index] / 100;
        } else {
            result += DATA[i][index];
        }
    });

    result += DATA.price[index];
    totalPrice.textContent = result;
}

function handlerCallBackForm() {
    const target = event.target;
    if ( target.classList.contains('want-faster') ) {
        target.checked ? showElem(fastRange) : hideElem(fastRange);
    }
    if (target.classList.contains('calc-handler')) {
        priceCalculation(target);
    }
}

startButton.addEventListener('click', () => {
    hideElem(firstScreen);
    showElem(mainForm);

});

endButton.addEventListener('click', () => {
    formSend(formCalculate.elements);
});

formCalculate.addEventListener('change', handlerCallBackForm);