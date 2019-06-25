const iconEyes = (function() {
    const module = {};

    module.style = () => {
      $head = document.querySelector("head");
      $style = document.createElement("style");

      $style.textContent =`  
        .iconEyes {           
           float: right;
           cursor:pointer;
           margin-top: -6%;
        }`
       $head.insertAdjacentElement("beforeend", $style); 
    }

    module.render = () => {
        module.style();
        return `<img class="iconEyes" src="../img/hidden.png"></img>`
    };
  return {
    render: module.render  
  }
})()