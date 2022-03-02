
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    var hrs = new Date().getHours();
    var minute = new Date().getMinutes();


    if (hrs <=17 && minute <=30)
    document.getElementById("target").innerHTML = "Good-Morning";
    
        else 
        document.getElementById("target").innerHTML = "Good-Evening";

})();
