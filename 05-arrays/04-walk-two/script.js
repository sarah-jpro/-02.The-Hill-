// 05-arrays/04-walk-two/script.js - 5.4: walk through the list (2)


(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {

        index = 0;
        array = [ "pomme","poire","fraise","tomate","kiwi","banane","orange","mandarine","durian",
        "pêche",
        "raisin",
        "cerise",];
 
        array.forEach(myFunction);
        function myFunction(item, index)
        {
        console.log(item);

        }
    });

})();
