let mausecursor = document.querySelector(".cursor");
let links = document.querySelectorAll(".header__nav a");
 console.log(links);
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


