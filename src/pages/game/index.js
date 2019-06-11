(function (){
const $root = document.querySelector("#root");

const $wrapperCard = createCardsWrapper(); 

const createMemoryCard = createCard.create();
const $pointBar = pointBar.create();
const $layerStart = layerStart.render("Start");

const $memoryCard = createMemoryCard({src:"img/icon-collabcode.png", alt:`Gueio mascote collab`});
const $memoryCardC = createMemoryCard({src:"img/icon-c.png", alt:"Card C++"});
const $memoryWoman = createMemoryCard({src:"img/icon-woman.png", alt:"icon de mulher programando"});
const $memoryCardJS = createMemoryCard({src:"img/icon-js.png", alt:"Card de js"});
const $memoryBug = createMemoryCard({src:"img/icon-bug.png", alt: "card de bug"});


// $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
// $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
// $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
// $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
// $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
// $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
// $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryBug);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJS);   
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryWoman);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryCardC);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryWoman);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJS); 
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryCardC);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryBug);
  
  $root.insertAdjacentHTML("afterbegin" , $pointBar);  
  $root.insertAdjacentElement("beforeend", $wrapperCard);
  $root.insertAdjacentHTML("beforeend", $layerStart)
  
 
})()