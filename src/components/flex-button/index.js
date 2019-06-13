const flatButton = (function(){
    const module = {};
    module._id = 0;

    module._style = (active) => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
     

        $style.textContent = `
        .flat-button-${module._id}{
          display: inline-block;
          background-color: ${active ? "#f25a70":"#dbcea7"};
          width: 180px;
          height: 176px;
          font-weight: bold;
          color: #fffcee;
          text-transform: uppercase;
        }        
        `
        $head.insertAdjacentElement("beforeend", $style);
    
    }     
    
    module.render = (text, active = false) => {
        module._id ++;
        module._style(active);
        return `<button class="flat-button-${module._id}">${text}</button>`;
    }

    return {
        render:module.render
    }
})();