
document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById("display");

    function appendValue(value) {
        if (display) {
            display.value += value;
        }
    }

    function clearDisplay() {
        if (display) {
            display.value = "";
        }
    }

    function calculateResult() {
        if (display) {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
    }

  
    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.calculateResult = calculateResult;
});
