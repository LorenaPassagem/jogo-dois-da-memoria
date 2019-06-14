const textBox = (function(){
    const module = {};
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = ``
        $head.insertAdjacentElement("beforeend", $style);
    }

    module._checkEmail = () => {           
        const adressEmail = document.querySelector(".email");
        const contactEmail = String(adressEmail.value);
        const n = contactEmail.test("@");
        console.log(n ) //= false ? "Email invalido" : "email valido");   
    }

    module.render = () => {
        module._style();
        
         return `<form>
                  <label> Email</label>
                  <input class="email" type="email"></input>
                  <input class="login" type="button" value="login"
                   onClick="textBox.checkEmail()">
                </form>` 
     }

    

return {
    render: module.render,
    checkEmail:module._checkEmail    
}
        
})();
