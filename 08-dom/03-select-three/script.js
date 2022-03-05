// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {
    
    function modifierTexte ()
    {
        let own = document.getElementsByClassName("target");
        for (let index = 0; index < own.length; index++) {
            own[index].innerHTML="Owner";

            
        }
    
    }
    modifierTexte()
    
})();
