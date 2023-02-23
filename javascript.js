const output = document.getElementById('output');
const input = document.getElementById('input');

const btn=document.querySelectorAll('.calculator-button');

btn.forEach( button => {
    
    const valor = button.getAttribute("data-value");
    let inputText;
    button.addEventListener('click', e => {
        input.innerHTML = `${valor}`
    })
})