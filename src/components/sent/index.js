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

module._checkEmail = () => {           
    // const adressEmail = document.querySelector(".buttonSent");
    // const contactEmail = String(adressEmail.value);
    // const teste = /@/;
    // const n = contactEmail.test(teste);
    // console.log(n) //= false ? "Email invalido" : "email valido");   
}
  
module.render = content => {
    module.style();
    return `
           <input class="buttonSent" type="submit" value=${content}
           onClick="buttonSent._checkEmail()">
           `
}

    return {
       render: module.render,
       checkEmail: module._checkEmail
    }
})();