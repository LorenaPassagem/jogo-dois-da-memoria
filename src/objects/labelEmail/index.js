const labelEmail = (function (){
     const module = {};

     module.style = () =>{
      $head = document.querySelector("head");
      $style = document.createElement("style");
     
     $style.textContent = `
     .labelCollab {
       display: block;
       color: #3a4042;
       font-size: 16px;
       opacity:0.5;      
     }`
     
     $head.insertAdjacentElement("beforeend", $style);
     }
     module.render = (content) => {
        module.style();
        return `<label class="labelCollab">${content}</label>`
     };
    
     return {
        render: module.render
     }
})();
