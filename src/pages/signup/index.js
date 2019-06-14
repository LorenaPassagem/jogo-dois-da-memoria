(function (){
    const $root = document.querySelector("#root");
    $flatButton = flatButton.render("login");
    $signupButton = flatButton.render("signup", true);

   
    $imgGueio = iconGueio.render();
    $titleWelcome = titleWelcome.title("Welcome!");
    $boxMail = textBox.render();  
    //$titleHello = titleWelcome.title("Hello!");
    
    $avatarWrapper = avatarWrapper.render($imgGueio,  $titleWelcome);

    
    $root.insertAdjacentHTML("beforeend", $flatButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $avatarWrapper);
    $root.insertAdjacentHTML("beforeend", $boxMail);

       
})();