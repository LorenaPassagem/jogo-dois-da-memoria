const iconGueio = (function(){
    const module = {};

    module.style = () => {
     const $head = document.querySelector("head");
     const $style = document.createElement("style");

        $style.textContent = `        
        .imgGueio {   
            background: #FFF;    
            border: solid 30px #FFF;
            border-radius: 50%; 
            //display: flex;   
            //justify-content: center;
            display: inline-block;    
        } 
        .imgGueio > .logo {
            width: 127px;            
        }       
        `

        $head.insertAdjacentElement("afterend", $style);
    }

    module.render = () => {
        module.style();
        return `
        <figure class="imgGueio">
         <img class="logo" src="img/icon-collabcode.png" alt="mascote collab"></img>
        </figure>`
    }
    
    return {
        render:module.render       
    }
})();