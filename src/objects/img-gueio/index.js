const iconGueio = (function(){
    const module = {};

    module.style = () => {
     const $head = document.querySelector("head");
     const $style = document.createElement("style");

        $style.textContent = `
        .imgGueio{
         background-color: red;
         width:100px; 
         border-radius: 50%; 
        }`
        $head.insertAdjacentElement("afterend", $style);
    }

    module.render = () => {
        module.style();
        return `<img class="imgGueio" src="img/icon-collabcode.png" alt="mascote collab"></img>`
    }
    
    return {
        render:module.render, 
       
    }
})();