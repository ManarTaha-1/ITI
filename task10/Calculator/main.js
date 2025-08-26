var answer = document.getElementById("Answer");

function EnterNumber(e) {
    if (answer.value === "Error") {
        answer.value = "";
    }
    answer.value += e;
}

function EnterOperator(value) {
    if (answer.value === "Error") {
        answer.value = "";
    }
    answer.value += value;
}

function EnterClear() {
    answer.value = '';
}

function EnterEqual() {
    try {
        let expression = answer.value;
        let result = eval(expression);

        if (result === Infinity || result === -Infinity) {
            answer.value = "Error";
        } else {
            answer.value = result;
        }
    } catch {
        alert("Invalid expression");
        answer.value = '';
    }
}

