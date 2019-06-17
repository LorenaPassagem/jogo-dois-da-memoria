const labelEmail = (function (){
     const module = {};

     module.style = () =>{
      $head = document.querySelector("head");
      $style = document.createElement("style");
     
     $style.textContent = `
     .labelCollab {
       color: #3a4042;
       font-size: 16px;
     }`
     
     $head.insertAdjacentElement("beforeend", $style);
     }
     module.render = (content) =>{
        module.style();
        return `<label class="labelCollab">${content}</label>`
     };
    
     return {
        render: module.render
     }
})();
