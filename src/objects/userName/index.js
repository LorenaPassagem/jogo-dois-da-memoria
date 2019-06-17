const userName = (function (){
 const module = {};

 module.style = () => {
    
}
module.render = () => {
    module.style();
    return `<input class="user" type = "Email" placeholder="user name"></input>`
}
return {
    render: module.render
}
})();