class Calculator{

    //diferentes propiedades que necesitamos guardar: previousOperand, currentOperand and operator

    constructor(previousTextElement, currentTextElement){ //where to put our display
        //cada vez que creamos un nuevo cálculo, tenemos que inicializar, por ende tmb limpiamos
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;//propiedades
        this.allClear();
    };

    //elegimos el primer valor, luego la operación y 
    //terminamos agregando un segundo valor para luego apretar =
    chooseOperation(operation){
        this.operation = operation;
        previousTextElement.innerText = this.currentTextElement.innerText + " " + this.operation ;
        currentTextElement.innerText = '';
    }

    operate(currentValue, previousValue, operator){
        let result, a, b;
        a = parseFloat(currentValue);
        b = parseFloat(previousValue);
        switch(operator){
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
        }
        this.updateOutput(result);
    };//compute()


    input(number){
        currentTextElement.innerText += number;
    };

    updateOutput(number){
        previousTextElement.innerText = number;
        currentTextElement.innerText = '';
    };

    deleteNumber(){

    };

    allClear(){
        this.previousTextElement.innerText = '';
        this.currentTextElement.innerText = '';
        this.operation = undefined;
    };
}

const previousTextElement = document.getElementById('previous');
const currentTextElement = document.getElementById('current');
const buttonNumber = document.querySelectorAll('[data-number]');
const buttonAllClear = document.querySelector('[data-clear]');
const buttonDelete = document.querySelector('[data-delete]');
const buttonEqual = document.querySelector('[data-equal]'); 
const buttonOperator = document.querySelectorAll('[data-operator]');

const calculate = new Calculator(previousTextElement, currentTextElement);

buttonNumber.forEach(button => {
    button.addEventListener('click', e => {
        //appendNumber(lo que tenga el boton) y lo mando al display
        calculate.input(button.innerText);
    })
})

buttonOperator.forEach(button => {
    button.addEventListener('click', e => {
        //appendNumber(lo que tenga el boton) y lo mando al display
        calculate.chooseOperation(button.innerText);
    })
})

buttonEqual.addEventListener('click', e => {
    calculate.operate(
        previousTextElement.innerText,
        currentTextElement.innerText,
        calculate.operation);
})