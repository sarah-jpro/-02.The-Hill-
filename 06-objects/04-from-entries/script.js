// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    document.getElementById("run").addEventListener("click", function (){
        const entries = new Map([
            ["name", "Skitty"],
            ["species", "cat"],
            ["age", 9],
            ["gender", "female"],
            ["color","tabby"]
        ]);

        const obj = Object.fromEntries(entries);

        console.log(obj);
       


    })
})();
