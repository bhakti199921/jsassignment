var cal = 0;

function getInput(i) {
    var x = i;
    //  document.getElementById("input").value+=i;//value+i 
    //it function is join number or string eval()
    if (x === "=") {
        document.getElementById('input').value = eval(document.getElementById('input').value)
    } else if (x === '+' || x === '-' || x === '/' || x === '*') {
        if (cal === 0) {
            document.getElementById('input').value += i;
            cal = 1;
        }
    } else if (x === 'c') {
        document.getElementById('input').value = "";
    } else {
        document.getElementById('input').value += i;
        cal = 0;
    }
}