let mausecursor = document.querySelector(".cursor");
let links = document.querySelectorAll(".header__nav a");
/*funcionamiento del mause*/
window.addEventListener("mousemove", cursor);
function cursor(e) {
  mausecursor.style.top = e.pageY + "px";
  mausecursor.style.left = e.pageX + "px";
}

links.forEach(li => {
     li.addEventListener("mouseover",()=>{
        mausecursor.classList.add("link-clicleable");
        li.classList.add("hoverlink")
    });
    li.addEventListener("mouseleave",()=>{
        mausecursor.classList.remove("link-clicleable");
        li.classList.remove("hoverlink")
    });
   
});
/*funcionamiento del perseguidor*/
let thePersecutor=document.querySelector(".light");
let gallery=document.querySelector(".gallery");
let itemsgallery=document.querySelectorAll(".gallery__item");

itemsgallery.forEach(item=>{
  item.addEventListener("mousemove",function (e) {
    thePersecutor.style.left=`${e.pageX}px`;
    thePersecutor.style.top=`${e.pageY}px`;
  });
})
/*gallery.addEventListener("mousemove",function (e) {
  thePersecutor.style.left=`${e.pageX}px`;
  thePersecutor.style.top=`${e.pageY}px`;
})*/

/*funcionamiento del menu*/
let containericon=document.querySelector(".header__menuBurguer");
let icon=document.getElementById("menuBurguer__icon");
let nav=document.querySelector(".header__nav");
console.log(nav)
containericon.addEventListener('click',()=>{

  if (icon.getAttribute('src') == "./imgs/menu.svg") {
    icon.removeAttribute('src')
    icon.setAttribute('src',"./imgs/x.svg")
    nav.classList.toggle('openmenu');
    window.scroll(0,0)
  }else{
    icon.removeAttribute('src')
    icon.setAttribute('src',"./imgs/menu.svg")
    nav.classList.toggle('openmenu');
    
  }
})
