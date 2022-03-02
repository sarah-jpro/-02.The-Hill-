
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    const event = new Date(Date.UTC(2022, 03, 01, 2, 0, 0));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    
    document.getElementById("target").innerHTML = (event.toLocaleDateString('de-US', options));
    function horloge()
{
	var tt = new Date().toLocaleTimeString(); // hh:mm:ss
 
	document.getElementById("target").innerHTML = tt;
	
}
})();
