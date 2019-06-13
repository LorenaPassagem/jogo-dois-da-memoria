const titleWelcome = (function(){
    const module = {}

    module.banana = () =>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .welcome{
           background-color: back; 
           color: #f25a70;

        }`
    $head.insertAdjacentElement("beforeend", $style)
    }
    module.title = () => { 
        module.banana()      
      return `<h1 class="welcome">Welcome</h1>`
     }

     return {
         title: module.title
     }
})()

