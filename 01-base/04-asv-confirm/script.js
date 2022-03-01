
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    let age=prompt ("How old are you?");
    let gender=prompt ("what's your gender?");
    let town= prompt ("In which town do you live?");

    let rep= confirm ("it's corect" + age + gender + town );
    if (rep==true) {
        alert ("Thank's")
    }
        else {
        age=prompt ("How old are you?");
        gender=prompt ("what's your gender?");
        town= prompt ("In which town do you live?");
        confirm=rep
        }

})();
