//07-classes/02-methods/script.js - 7.2: methods


(() => {
    document.getElementById("run").addEventListener("click", function (){

        class Person {
            constructor(firstname,lastname) {
                this.firstname = firstname
                this.lastname = lastname
            }
            
        }   
        const fullname = new Person("Henry","Goland");
            
          
          console.log("Hello" +" "+ fullname.firstname +" "+ fullname.lastname )


    })   
})();
