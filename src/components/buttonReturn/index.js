const buttonReturn = (function(){
   const module = {};
   
   module._style = () => {
       $head = document.querySelector("head");
       $style = document.createElement("style");
       $style.textContent =`
         .buttonReturn {
             background-color: #FFF;
             padding: 2%;
             margin: 2%;
         }`
        
        $head.insertAdjacentElement("beforeend", $style);
   }

   module.clickBack = (path) => {            
        location.hash = `#/${path}`;
        location.reload(true);
       
       }
   
    module.render = (content, path="") => {
     module._style();
    return `<button class="buttonReturn" onClick="buttonReturn.clickBack('${path}')">${content}</button> `
   }

   return {
     render: module.render,
     clickBack:module.clickBack
   }
})();