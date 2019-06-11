(function (){
    const $root = document.querySelector("#root");
    $flatButton = flatButton.render()
    $root.insertAdjacentHTML("beforeend", $flatButton);
    $root.insertAdjacentHTML("beforeend", flatButton.render());
})();