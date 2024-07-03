const display=document.getElementById("display")

function appendtoDisplay(input){
display.value+=input
}
function calculate(){
display.value=eval(display.value)
}
function clearDisplay(){
    display.value = ""
}
document.addEventListener('keydown', function(event) {
    const key = event.key
    if (!isNaN(key) || key === '.') {
        appendtoDisplay(key)
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendtoDisplay(key);
    } else if (key === 'Enter') {
        calculate()
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1)
    } else if (key === 'Escape') {
        clearDisplay();
    }
})
