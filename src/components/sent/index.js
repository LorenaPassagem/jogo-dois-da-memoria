const buttonSent = (function(){
  const module = {};

 module.style = () => {
    $head = document.querySelector("head");
    $style = document.createElement("style");

    $style.textContent =`
    .buttonSent {
     background-color: #f25a70;
     color: #FFF;
     font-size: 14px;     
     width: 100%;
     height: 48px;
     border-radius: 30px;
     cursor: pointer;
    }

    .email + .buttonSent {
     margin-top: 45px;

    }
    `

  $head.insertAdjacentElement("beforeend", $style);
}

module._handleClick = (event, path) => {           
 event.preventDefault();
 location.hash = `#/${path}`;
 location.reload(true);
}
  
module.render = ({content="", path= ""}) => {
    module.style();
    return `<input class="buttonSent" type="submit" value=${content}
            onClick="buttonSent.handleClick(event, '${path}')">`
}

    return {
       render: module.render,
       handleClick: module._handleClick
    }
})();