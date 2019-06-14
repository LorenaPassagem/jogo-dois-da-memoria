const titleWelcome = (function(){
    const module = {};

    module.render = () =>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .welcome {
           color: #f25a70;
           font-size: 24px;
           letter-spacing: 0.6px;
           text-transform: uppercase;       
        }`
     $head.insertAdjacentElement("beforeend", $style);

    }
    module.title = (title) => { 
      module.render();      
      return `<h1 class="welcome">${title}</h1>`
     }

     return {
         title: module.title
     }
})()

