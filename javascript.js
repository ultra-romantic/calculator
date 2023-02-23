const output = document.getElementById('output');
const input = document.getElementById('input');

const btn=document.querySelectorAll('.calculator-button');
const btnResultado = document.getElementById('result');

let valorImprimir=0;

btn.forEach( button => {
    const valor = button.getAttribute("data-value");
    if(valor!=="="){
        button.addEventListener('click', e => {
            input.textContent = `${valor}`
            valorImprimir=`${valor}`
        });
    }
});

btnResultado.addEventListener('click', e => {
    output.textContent = valorImprimir;
});