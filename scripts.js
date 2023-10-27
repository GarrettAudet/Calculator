var calculatorDisplay = document.querySelector(".text")
var calculationDisplay = document.querySelector(".output")

function clearDisplay () {
    var clearDisplayButton = document.querySelector(".allclear")
    clearDisplayButton.addEventListener("click", function () {
        calculatorDisplay.textContent = "0";
        calculationDisplay.textContent = "";
    });
}

clearDisplay()

function clear () {
    var clear = document.querySelector(".clear")
    clear.addEventListener("click", function () {
        var text = calculatorDisplay.textContent;

        if (text.length > 0) {
            text = text.slice(0,-1);
            calculatorDisplay.textContent = text;
        }
    });
}

clear()

function appendNumbers () {
    var myNumberButton = document.querySelectorAll(".digits");

    myNumberButton.forEach(function (button) {
        button.addEventListener("click", function () {
            var classes = button.classList;
            var secondClass = classes[1];

            // Replace if 0 Otherwise Append
            if (calculatorDisplay.textContent === "0") {
                calculatorDisplay.textContent = secondClass;
            } else {
                calculatorDisplay.textContent += secondClass;
            }
        });
    });
}

appendNumbers()

function appendOperators () {
    var myOperatorButton = document.querySelectorAll(".operators");

    myOperatorButton.forEach(function (button) {
        button.addEventListener("click", function () {
            var classes = button.classList;
            var secondClass = classes[1];
            calculatorDisplay.textContent += (" " + secondClass + " ");
        });
    });
}

appendOperators ()

function calculateAnswer () {
    var calculation = document.querySelector(".equals")

    calculation.addEventListener("click", function () {
        try {
            var formula = calculatorDisplay.innerText;
            var answer = eval(formula);
            calculationDisplay.innerText = String(answer);
        } catch (error) {
            calculationDisplay.innerText = "Error";
        }

    });
}

calculateAnswer ()

function decimalInput () {
    var decimalAddition = document.querySelector(".decimal")
    decimalAddition.addEventListener("click", function () {
        calculatorDisplay.textContent += ".";
    });
}

decimalInput ()