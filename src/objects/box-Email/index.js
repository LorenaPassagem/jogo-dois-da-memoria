const boxEmail = (function (){
  const module = {};

module.style = () => {
   $head = document.querySelector("head");
   $style = document.createElement("style");

   $style.textContent =`
     .email {
        width: 340px;
        opacity: 0.5;
        border: solid 1px #3a4042;
      }`

    $head.insertAdjacentElement("beforeend", $style);
   } 
     
  module.render = () => {
      module.style();
      return `<input class="email" type="email" placeholder="Email"></input> `
  } 

  return {
      render: module.render
  }
})();