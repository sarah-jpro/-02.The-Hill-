
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {
    
    document.getElementById("run").addEventListener("click", () => {
    function changeColor(){
        let r =Math.floor (Math.random() * 255 );
        let g =Math.floor (Math.random() * 255 );
        let b =Math.floor(Math.random() * 255 );
  
    document.body.style.backgroundColor = `rgb( ${r}, ${g}, ${b} )`;   
    }   
    changeColor()
    });  

})();