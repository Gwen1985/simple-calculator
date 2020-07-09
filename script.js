function calc() {
    let firstNr = document.getElementById("firstNr").value;
    let secondNr = document.getElementById("secondNr").value;

    let op = document.getElementById("operator").value

    if (op === "+") {
        document.getElementById("result").value = parseInt(firstNr) + parseInt(secondNr);
    }
    if (op === "-") {
        document.getElementById('result').value = firstNr - secondNr;
    }
    if (op === "x") {
        document.getElementById('result').value = firstNr * secondNr;
    }
    if (op === "/") {
        document.getElementById('result').value = firstNr / secondNr;
    }

}
