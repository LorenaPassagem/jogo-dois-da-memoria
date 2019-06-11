const createCard = (function() {
  const module = {};

  module._create = () => { 
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
    }

    .memory-card .card {   
      display: flex;  
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 30%;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
  }

  .memory-card.-active .card,
  .memory-card.-score .card {
    display: none;
  }

  .memory-card.-active .card.-front,
  .memory-card.-score .card.-front {
    display: flex;
  }

  .memory-card .card.-front {
    background-color: #fff;
    display: flex;
    
  }

  .memory-card .card.-front::before {
      content: ""; 
      width: 95px;
      height: 95px;
      background: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

  .memory-card .card > .icon{
      width: 100px;
      height: 100px;
  } 

  .memory-card .card.-front > .icon{
      position: absolute;
      transform: translateY(-12px);
  }
  `;
    
  $head.insertBefore($style, null);

    return ({src, alt}) =>  
      `<div class="memory-card" onClick = "createCard.clickCard(this)">
        <article class="card -front">
        <img src="${src}"
        alt="${alt}" 
        class="icon">
        </article>
        <article class="card">
        <img src="img/icon-collabcode.png"
        alt="icon da collabcode" 
        class="icon">
        </article>
      </div>
      `;    
  }
   
  module._clickCard = (component) =>{   
    if(!component.classList.contains("-active")){
     module._activeMemoryCard(component);
     module._checkSure();
   }
  }
  module._activeMemoryCard = (component) =>{
    if(store.qtdMemoryCardActive < 2){
      component.classList.add("-active");
     }
   };

   

  module._checkSure = () => {
    if(store.qtdMemoryCardActive === 1){
    const $memoryCardsActive = document.querySelectorAll(".memory-card.-active");
    let cards1 = $memoryCardsActive[0].querySelector(".-front .icon").getAttribute("src");
    let cards2 = $memoryCardsActive[1].querySelector(".-front .icon").getAttribute("src");
    if(cards1 === cards2){      
     store.score++;
     document.querySelector(".point-bar > .number").textContent = store.score;
       $memoryCardsActive.forEach($memoryCard => { 
       $memoryCard.classList.add("-score");
       $memoryCard.classList.remove("-active");
     });
     console.log("valor dos pontos", store.score);
    } else {
     setTimeout(()=>{             
       $memoryCardsActive.forEach($memoryCardsActive =>{
         $memoryCardsActive.classList.remove("-active");
       });
       qtdMemoryCardActive = 0;
       }, 1000);       
    }
   }   
  };
 
 return {
   create: module._create,
   clickCard: module._clickCard,
   checkSure: module._checkSure
 };
})();
