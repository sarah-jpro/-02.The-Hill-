// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", () => {

        array =[
            "apple",
            "pear",
            "raspberry",
            "tomatos",
            "kiwi",
            "banana",
            "orange",
            "mandarin",
            "durian",
            "peache",
            "grap",
            "cherry",
        ]
        for (index = 0; index < array.length; index++) {
            console.log(array[index]);
        }
    });

})();
