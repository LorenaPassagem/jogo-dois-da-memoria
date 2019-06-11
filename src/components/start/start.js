const start = (function(){
    const module = {};
   

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
         .game-button {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #2ed573;
            border: 3px solid #FFFCEE;
            color: #fffcee;
            text-transform: uppercase;
            cursor: pointer;
            opacity: 1;
            transition: opacity 1000ms linear, transform 500ms linear;
            
         } 

         .game-button.-disable {
             opacity:0;
             transform: translate(-50%, -50%) scale(1.5)
         }
        `;
        $head.insertBefore($style, null);
    };

    module.handleClick = component => {
        component.remove();
        document.querySelector(".transparency-layer").remove();
     
    }   

    module.render = (component) =>{
        module._style();
        return `
         <button class="game-button" ">${component}<button>
        `;
    };
    return{
        render: module.render,
        handleClick: module.handleClick
    }
  })()


