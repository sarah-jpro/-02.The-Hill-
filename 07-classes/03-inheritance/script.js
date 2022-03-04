// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    document.getElementById("run").addEventListener("click", function (){

        class Animal {
            constructor( name, greeting) {
              this.name = name;
              this.greeting = this.greeting;
            }
        }
        let animal = new Animal("My animal");

        class Cat extends Animal {
            sayHello() {
                return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
          }
        let Cat = new Cat("Miauz")

        class Dog extends Animal {
            sayHello() {
                return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
          }
        let Dog = new Dog("Zelda")

        console.log (
            new Cat ("Hello"+ `${this.constructor.greeting}! I'm ${this.name}!`))

        console.log (
            new Dog ("Hello"+ `${this.constructor.greeting}! I'm ${this.name}!`))
           

    })    
})();
