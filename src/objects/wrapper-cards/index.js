const createCardsWrapper = () => {
 const $cardswrapper = document.createElement("section");
 $cardswrapper.classList.add("cards-wrapper");

 const $head = document.querySelector("head");
 const $style = document.createElement("style");
 $style.textContent = `
 .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
 }
.cards-wrapper > .memory-card {
    margin-bottom: 10px;
 }
`;
 $head.insertBefore($style, null)
return $cardswrapper;
}






//  você criou
//  const createCardsWrapper = () => {
//     const $wrapperCards =`<section class="cards-wrapper"</section> `
//   return $wrapperCards;
//   }
// depois na aula 24 video 6 você criou const $cardswrapper = document.createElement('section')
