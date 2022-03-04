// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

        document.getElementById("run").addEventListener("click", function (){

            console.log(
            new Cat('Skitty', 9),
            new Cat('Pixel', 6),
            )
        
        })    
})();
