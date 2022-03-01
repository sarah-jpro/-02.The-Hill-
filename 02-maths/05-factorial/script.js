
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let fact= new Number (document.getElementById("number").value);
        function factorial (fact) {
            for (let x=fact -1; x>=1; x--) {

                fact *=x; 
               }
               return fact;
        }   
        alert (factorial (fact));   
    });    
})();
