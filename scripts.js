function insertValues(num){
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input + num
}

function calculate() {
    const input = document.getElementById('input-value').value 
    document.getElementById('input-value').value = eval(input)
}
function cleanInput() {
    const input = document.getElementById('input-value').value = " " 
}

function invertValue() {
    calculate()
    const input = document.getElementById('input-value').value 
    document.getElementById('input-value').value = input * -1
}