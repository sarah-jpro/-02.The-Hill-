// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    } 
    class Cat extends Animal {
        static greeting="HELLO";
        constructor(name) {
            super();
            this.name = name
        }

    }
    class Dog extends Animal {
        static greeting="HELLO";
        constructor(name) {
            super();
            this.name = name
        }
    }

    document.getElementById("run").addEventListener("click", function (){

        let Cat = new Cat("Miauz")
        console.log (
            new Cat ("Hello"+ `${this.constructor.greeting}! I'm ${this.name}!`))
        
        let Dog = new Dog("Zelda")
        console.log (
            new Dog ("Hello"+ `${this.constructor.greeting}! I'm ${this.name}!`))

    })    
})();
