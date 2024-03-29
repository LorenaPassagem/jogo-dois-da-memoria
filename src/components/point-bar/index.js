const pointBar = (function(){
    const module = {};
    module._style = function(){
        const $head = document.querySelector("head")
        const $style = document.createElement("style")
        $style.textContent = `
        .point-bar {
          background-color: #3a4042;
          height: 40%;
          text-align: center;
          font-family: "Comfortaa", sans-serif;
         }

         .point-bar > .number{
            color: #FFF;
            line-height: 40%;            
         } 
        `;
        $head.insertBefore($style, null)
    }

    module.create = () => {
        module._style();
        return `
         <header class="point-bar"> 
            <span class="number">0</span>
         </header>
        `;
      };
    return {
        create: module.create
    };

})();