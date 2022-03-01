
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
    let x= new Number (document.getElementById("op-one").value);
    let y= new Number (document.getElementById("op-two").value);
    switch (operation) {
        case "addition":
            alert (x+y);
            break;
        case "multiplication":
            alert (x*y);
            break;  
        case "substraction":
            alert (x-y);
            break;  
        case "division":
            alert (x/y);
            break;
    }
};
    

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
