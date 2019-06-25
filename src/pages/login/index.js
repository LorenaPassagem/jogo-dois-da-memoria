(function(){
 const $root = document.querySelector("#root");
 $buttonlogin = flatButton.render("login", true);
 $buttonsigup = flatButton.render("signup", false);

 $iconGueio = iconGueio.render();
 $hello = titleWelcome.title("Hello!");
 $avatarWrapper = avatarWrapper.render($iconGueio, $hello);
 
 $formLogin = formLogin.render()

 $root.insertAdjacentHTML("beforeend", $buttonlogin);
 $root.insertAdjacentHTML("beforeend", $buttonsigup);
 $root.insertAdjacentHTML("beforeend", $avatarWrapper);
 $root.insertAdjacentHTML("beforeend", $formLogin);
 
 

})();
