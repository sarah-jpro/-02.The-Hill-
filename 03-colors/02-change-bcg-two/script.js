
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    document.getElementById("run").addEventListener("click", function() {
        let x = document.getElementById("color").value
        document.body.style.backgroundColor = x ;
    });

})();
