const flatButton = (function(color){
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .flat-button{
          display: inline-block;
          background-color: ${color} ; //#dbcea7
          width: 180px;
          height: 176px;
          font-weight: bold;
          color: #fffcee;
          text-transform: uppercase;
        }`
        $head.insertAdjacentElement("beforeend", $style);
    
    }     
    
    module.render = () => {
        module._style();
        return `<button class="flat-button">Login</button>`;
    }

    return {
        render:module.render
}
})()