var enterCheck = false, 
    statment = ""
    operators = [];
    result = 0;
function EnterEqual() {
    if (enterCheck) {
        var arr = statment.split("+").join(",").split("-").join(",").split("/").join(",").split("*").join(",").split(",");
        result = parseFloat(arr[0]);
        for (var i = 1; i < arr.length; i++) {
            switch (operators[i - 1]) {
                case "+":
                    result += parseFloat(arr[i]);
                    break;
                case "-":
                    result -= parseFloat(arr[i]);
                    break;
                case "/":
                    result /= parseFloat(arr[i]);
                    break;
                case "*":
                    result *= parseFloat(arr[i]);
                    break;
            }
        }
        document.getElementById("ans").value = result;
    }

    else {
        alert("This Expression Prevent")
    }
}

function EnterNumber(value) {
    document.getElementById("ans").value += value;
    statment += value;
    enterCheck = true;
}

function EnterOperator(operator) {
    if (enterCheck) {
        document.getElementById("ans").value += operator;
        statment += operator;
        operators.push(operator);
        enterCheck = false;
    }
    else {
        alert("This Expression Prevent")
    }

}

function EnterClear() {
    document.getElementById("ans").value = "";
    statment = "";
    operators = [];
}

