const signup = (function (){
    const $root = document.querySelector("#root");
    $flatButton = flatButton.render("login", false, "login");
    $signupButton = flatButton.render("signup", true, "signup");
   
    $formSignup = formSignup.render();
   
    $imgGueio = iconGueio.render();
    $titleWelcome = titleWelcome.title("Welcome!");
    $avatarWrapper = avatarWrapper.render($imgGueio,  $titleWelcome);
    

    $root.insertAdjacentHTML("beforeend", $flatButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $avatarWrapper);
    
   
    // $root.insertAdjacentHTML("beforeend", $labelUserName);
    // $root.insertAdjacentHTML("beforeend", $inputUserName);
    // $root.insertAdjacentHTML("beforeend", $labelEmail);
    // $root.insertAdjacentHTML("beforeend", $boxEmail);
    // $root.insertAdjacentHTML("beforeend", $labelPassword);
    // $root.insertAdjacentHTML("beforeend", $inputPassaword);    
    // $root.insertAdjacentHTML("beforeend", $labelConformPassword);
    // $root.insertAdjacentHTML("beforeend", $inputConformPassword);
  
    $root.insertAdjacentHTML("beforeend", $formSignup);
   
      
});