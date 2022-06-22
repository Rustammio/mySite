const display = document.querySelector('.calculator-display')
const buttons = Array.from(document.getElementsByClassName('calculator-keyboard-button'))
buttons.map((e) => {
    e.addEventListener('click', function (event) {
        switch (event.target.innerText) {
            case 'AC':
                display.innerText = ''
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                if (display.innerText) {
                    display.innerText = eval(display.innerText)
                }
                break;
            default :
                display.innerText += event.target.innerText
        }
    })
})
console.log(display)