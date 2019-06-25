const formLogin = (function(){
    const module = {};
    
    module._children = () => {
        $labelEmail = labelEmail.render("E-mail User Name");        
        $boxEmail = boxEmail.render("lorenapassagem@gmail.com", "email");     
       
        $labelConformPassword = labelEmail.render("Confirm Passaword");
        $inputConformPassword = boxEmail.render("Confirm Passaword", "password");
        
        $labelPassword = labelEmail.render("Passaword");
        $inputPassaword = boxEmail.render("Password", "password");        
        $buttonSent = buttonSent.render("Login");
        
        return ` 
          ${$labelEmail}
          ${$boxEmail}          
         
          ${$labelPassword}
          ${$inputPassaword}         
          
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