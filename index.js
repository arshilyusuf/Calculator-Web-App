const input = document.getElementById('input-box');
const buttons = document.querySelectorAll('.button');


let displayString = "";
let calcString = "";

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const target = e.target.tagName === 'I' ? e.target.parentElement : e.target;
        const buttonText = target.innerHTML;
        const opbuttons = document.querySelectorAll('.op');

        if (buttonText.includes('fa-equals')) {
            try {
                displayString = eval(calcString).toString();
                input.value = displayString;
                calcString = displayString;
            } catch (error) {
                input.value = 'Error';
                displayString = '';
                calcString = '';
            }
            
            opbuttons.forEach(button => { button.classList.remove('active') });
        } else if (buttonText.includes('fa-plus') || buttonText.includes('fa-minus') || buttonText.includes('fa-divide') || buttonText.includes('fa-xmark')) {
            if (buttonText.includes('fa-divide')) {
                calcString += '/';
            } else if (buttonText.includes('fa-xmark')) {
                calcString += '*';
            } else if (buttonText.includes('fa-plus')) {
                calcString += '+';
            } else if (buttonText.includes('fa-minus')) {
                calcString += '-';
            }
            displayString = '';
            
            opbuttons.forEach(button => { button.classList.remove('active') });
            target.classList.add('active');
        } else if (buttonText === 'AC') {
            displayString = "";
            calcString = "";
            input.value = displayString;
            
            opbuttons.forEach(button => { button.classList.remove('active') });
        } else if (buttonText === 'DEL') {
            displayString = displayString.slice(0, -1);
            calcString = calcString.slice(0, -1);
            
            input.value = displayString;
            opbuttons.forEach(button => { button.classList.remove('active') });
        } else if (buttonText === '%') {
            displayString = (parseFloat(displayString) / 100).toString();
            calcString = displayString;
            input.value = displayString;
            
            opbuttons.forEach(button => { button.classList.remove('active') });
        } else if (buttonText === '+/-') {
            displayString = (parseFloat(displayString) * -1).toString();
            calcString = displayString;
            input.value = displayString;
            
            opbuttons.forEach(button => { button.classList.remove('active') });
        } else {
            if (displayString === '0') {
                displayString = buttonText;
            } else {
                displayString += buttonText;
            }
            calcString += buttonText;
            input.value = displayString;
            
        }
    });
});
