let startEl = document.getElementById("start");
let endEl = document.getElementById("end");
let btnEl = document.getElementById("btn");
let para = document.getElementById("para");

btnEl.onclick = function() {
    let startVal = startEl.value;
    let endVal = endEl.value;

    if (startVal === "") {
        alert("Please Enter The Start Value")
    } else if (endVal === "") {
        alert("Please Enter The End Value")
    } else {
        let fromCounter = parseInt(startVal);
        let toCounter = parseInt(endVal);
        let counter = fromCounter

        let timeInterval = setInterval(function() {

            para.textContent = (counter);

            if (counter === toCounter) {
                clearInterval(timeInterval)
            }
            counter += 1;
        }, 1000)
    }
}