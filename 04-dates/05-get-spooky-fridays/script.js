
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    function numberOfFridaythe13thsIn(jahr) {
        var count = 0;
        for (var month=0; month<12; month++) {
            var d = new Date(jahr,month,13);
            if(d.getDay() == 5){
              count++;
           }
        }
        return count;  
                                
    }
    document.getElementById("target").innerHTML = numberOfFridaythe13thsIn; 

})();
