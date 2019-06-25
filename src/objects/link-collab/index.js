const linkCollab = (function(){
  const module = {};

  module._style = () => {
     $head = document.querySelector("head");
     $style = document.createElement("style");

    $style.textContent = `
     .linkCollab{
        display: block;
        text-decoration: none;
        color:#3a4042;
        opacity: 0.7;
        text-align: right;
        margin-top: 10%;
        margin-bottom: 30%;

     }`;

    $head.insertAdjacentElement("beforeend", $style);
  }    

  module.render = ({href,content}) => {
    module._style();
    return `<a class="linkCollab" href="${href}">${content}</a>`
 };

 return {
     render: module.render
 }
})();