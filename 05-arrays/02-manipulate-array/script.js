// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {

        let fruits = [
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
        console.log("Before pop");
        console.log(fruits);
        var popped_fruit = fruits.pop();

        console.log("After pop");
        console.log(fruits);

        console.log("Popped element: " + popped_fruit);
        console.log("Before push");
        console.log(fruits);
    
        fruits.push("kiwi");
    
        console.log("After push");
        console.log(fruits);

        console.log("Before shift");
        console.log(fruits);

        var elem = fruits.shift();

        console.log("After shift");
        console.log(fruits);

        console.log("Element shifted");
        console.log(elem);

        console.log("Before unshift");
        console.log(fruits);

        var new_length = fruits.unshift("banane");

        console.log("After unshift");   
        console.log(fruits);

        console.log("New length");
        console.log(new_length);    
    
    });
})();
