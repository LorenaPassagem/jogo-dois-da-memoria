const $root = document.querySelector("#root");

const $wrapperCard = createCardsWrapper();  

const $memoryCard = createCard({src:"img/icon-collabcode.png", alt:`Gueio mascote collab`});
const $memoryCardC = createCard({src:"img/icon-c.png", alt:"Card C++", nameClass:"-front"});
const $memoryWoman = createCard({src:"img/icon-woman.png", alt:"icon de mulher programando", nameClass:"-front"});
const $memoryCardJS = createCard({src:"img/icon-js.png", alt:"Card de js", nameClass:"-front"});
createStyle()

//   $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
//   $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
//   $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
//   $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
//   $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
//   $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
//   $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
//   $wrapperCard.insertAdjacentHTML("beforeend", $memoryCard);
  
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJS);   
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryWoman);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryCardC);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryWoman);
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryCardJS); 
  $wrapperCard.insertAdjacentHTML("beforeend", $memoryCardC);
  
$root.insertAdjacentElement("beforeend", $wrapperCard);
