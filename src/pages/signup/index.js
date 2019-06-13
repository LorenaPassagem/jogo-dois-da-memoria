(function (){
    const $root = document.querySelector("#root");
    $flatButton = flatButton.render("login");
    $signupButton = flatButton.render("signup", true);
    $imgGueio = iconGueio.render();
    $titleWelcome = titleWelcome.title();
    
    $root.insertAdjacentHTML("beforeend", $flatButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $imgGueio);
    $root.insertAdjacentHTML("beforeend", $titleWelcome)
    
})();