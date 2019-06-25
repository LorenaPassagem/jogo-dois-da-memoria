const boxEmail = (function (){
  const module = {};

module.style = () => {
   $head = document.querySelector("head");
   $style = document.createElement("style");

   $style.textContent =`
     .email {
       display: block;
        width: 100%;
        border-bottom: 2px solid rgba(58, 64, 66, 0.5);
      }
      .email + .labelCollab {
         margin-top: 30px;
      }
      `

    $head.insertAdjacentElement("beforeend", $style);
   } 
     
  module.render = ({placeholder="", type="text"}) => {
      module.style();
      
      return `<input class="email" type="${type}" placeholder="${placeholder}"></input> `
  } 

  return {
      render: module.render
  }
})();