
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let x= new Number (document.getElementById("op-one").value);
        let y= new Number (document.getElementById("op-two").value);
        alert (x+y);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let x= new Number (document.getElementById("op-one").value);
        let y= new Number (document.getElementById("op-two").value);
        alert (x-y);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let x= new Number (document.getElementById("op-one").value);
        let y= new Number (document.getElementById("op-two").value);
        alert (x*y);
    });

    document.getElementById("division").addEventListener("click", function() {
        let x= new Number (document.getElementById("op-one").value);
        let y= new Number (document.getElementById("op-two").value);
        alert (x/y);
    });
})();
