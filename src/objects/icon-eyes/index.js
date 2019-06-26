const iconEyes = (function() {
    const module = {};

    module.style = () => {
      $head = document.querySelector("head");
      $style = document.createElement("style");

      $style.textContent =`  
        .icon-eyes {
           background-image: url(/img/hidden.png);
           background-repeat: no-repeat;          
           cursor:pointer;
           display: block;
           text-indent: -9999px;
           width:24px;
           height:15px;
           margin-left: auto;
           transform: translateY(-110%);
           opacity:0.5;           
        }

        .icon-eyes.-active {
          opacity: 1;
        }
        `
       $head.insertAdjacentElement("beforeend", $style); 
    }
    module.handle = function() {
       const attrFor = this.getAttribute("for");
       const $input = document.querySelector(`#${attrFor}`);

       if ($input.getAttribute("type") === "text"){
         this.classList.remove("-active")
        $input.setAttribute("type","password");
       } else {        
        this.classList.add("-active")
        $input.setAttribute("type", "text");
       }
    }

    module.render = ({attrFor = ""}) => {
        module.style();
        return `<label for = "${attrFor}" class="icon-eyes" onClick="iconEyes.handleClick.bind(this)()"> Mostrar senha </label>`
    };
  return {
    render: module.render,
    handleClick:module.handle 
  }
})()