
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    var myDate = new Date();
    var hrs = myDate.getHours();

    if (hrs < 18)
    document.getElementById("target").innerHTML = "Good-Morning";
    
    else if (hrs >= 18 && hrs <= 24)
    document.getElementById("target").innerHTML = "Good-Evening";

})();
