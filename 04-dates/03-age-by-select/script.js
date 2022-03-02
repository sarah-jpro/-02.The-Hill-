
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

(() => {

    document.getElementById("run").addEventListener("click", () => {

        function submitBirthday() {
            var minutes = 1000 * 60;
            var hours = minutes * 60;
            var days = hours * 24;
            var years = days * 365;
        
            var birthday = Date.parse(document.getElementsByClassName("field dob,").value);
            var dateNow = new Date();
            var YearsOld = Math.round((dateNow-birthday)/ years);
            alert ("You are " + YearsOld + " years old.");
        }   
        submitBirthday();
    });

})();    