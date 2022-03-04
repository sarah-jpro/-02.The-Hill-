// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    document.getElementById("run").addEventListener("click", () => {
        
        let val1 = document.getElementById("n-1").innerHTML = Math.round(Math.random()*100);
        let val2 = document.getElementById("n-2").innerHTML = Math.round(Math.random()*100);
        let val3 = document.getElementById("n-3").innerHTML = Math.round(Math.random()*100);
        let val4 = document.getElementById("n-4").innerHTML = Math.round(Math.random()*100);
        let val5 = document.getElementById("n-5").innerHTML = Math.round(Math.random()*100);
        let val6 = document.getElementById("n-6").innerHTML = Math.round(Math.random()*100);
        let val7 = document.getElementById("n-7").innerHTML = Math.round(Math.random()*100);
        let val8 = document.getElementById("n-8").innerHTML = Math.round(Math.random()*100);
        let val9 = document.getElementById("n-9").innerHTML = Math.round(Math.random()*100);
        let val10 = document.getElementById("n-10").innerHTML = Math.round(Math.random()*100);
        
    })
    let numbers = [val1, val2,val3,val4,val5,val6,val7,val8,val9,val10];
    
})();
