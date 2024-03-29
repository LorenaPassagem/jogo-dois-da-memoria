const formSignup = (function(){
    const module = {};
    
    module._children = () => {
        $labelEmail = labelEmail.render("E-mail");        
        $boxEmail = boxEmail.render("lorenapassagem@gmail.com", "email");           
       
        $labelUserName  = labelEmail.render("User Name");
        $inputUserName = boxEmail.render("User name", "text");
        
        $labelPassword = labelEmail.render("Passaword");
        $inputPassaword = boxEmail.render("Password", "password");

        $labelConformPassword = labelEmail.render("Confirm Passaword");
        $inputConformPassword = boxEmail.render("Confirm Passaword", "password"); 
                
        $buttonSent = buttonSent.render("signup");
        
        return ` 
          ${$labelEmail}
          ${$boxEmail}          
          ${$labelUserName}
          ${$inputUserName}
          ${$labelPassword}
          ${$inputPassaword}
          ${$labelConformPassword}   
          ${$inputConformPassword}
          ${$buttonSent}
                 
        `;
    };

    module.style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent = `
            .form-signup {
                padding: 0 35px 40px;
            }
        `
        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = () => {
        module.style();
        return `<form class="form-signup" action="" method="POST" >${module._children()} </form>`
    } 
    return {
       render:module.render,
       
    };
})();