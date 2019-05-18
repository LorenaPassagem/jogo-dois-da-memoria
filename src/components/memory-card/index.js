const createCard = ({src, alt, nameClass}) => 
   `
   <article class="memory-card ${nameClass}">
   <img src="${src}"
   alt="${alt}" 
   class="icon" onClick = clickCard()></img>
   </article>`;

function createStyle(){
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
  .memory-card {
    width: 155px;
    height: 155px;
    background-color: #f25a70;
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.memory-card.-front {
    background-color: #fff;
}

.memory-card.-front::before {
    content: ""; 
    width: 95px;
    height: 95px;
    background: #d4d4d4;
    border-radius: 50%;
    position: absolute;
}


.memory-card > .icon{
    width: 100px;
    cursor: pointer;
} 

.memory-card.-front > .icon{
    position: absolute;
    transform: translateY(-12px);
}
  `;
$head.insertBefore($style, null);
}

const clickCard = ()=>{
  console.log("aeee");
}