(function (){
    const $root = document.querySelector("#root");
    $flatButton = flatButton.render("login");
    $signupButton = flatButton.render("signup", true);

   
    $imgGueio = iconGueio.render();
    $titleWelcome = titleWelcome.title("Welcome!");
    $labelEmail = labelEmail.render("E-mail");  
    $avatarWrapper = avatarWrapper.render($imgGueio,  $titleWelcome);

    $boxEmail = boxEmail.render();   
    $buttonSent = buttonSent.render("Enviar");
   
    $labelUserName  = labelEmail.render("User Name");
    $inputUserName = boxEmail.render();
    

    
    $root.insertAdjacentHTML("beforeend", $flatButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $avatarWrapper);
  
    $root.insertAdjacentHTML("beforeend", $labelEmail);
    $root.insertAdjacentHTML("beforeend", $boxEmail);
    $root.insertAdjacentHTML("beforeend", $labelUserName)
    $root.insertAdjacentHTML("beforeend",  $inputUserName)
    $root.insertAdjacentHTML("beforeend", $buttonSent);
       
})();