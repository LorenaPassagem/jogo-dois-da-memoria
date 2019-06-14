const avatarWrapper = (function(){
const module = {};

module._style =() => {
 $head = document.querySelector("head");
 $style = document.createElement("style");

 $style.textContent=`
   .avatar-Wrapper{       
       text-align: center; 
       transform: translateY(-40%);    
    }`

   $head.insertAdjacentElement("beforeend", $style); 
}
module.render = (...$params) => {
  module._style();
  return `<div class = "avatar-Wrapper">${$params.join("")}</div>`
}

return {
    render: module.render
 }
})();