const menuBtn = document.querySelector('.menu-button');
const menuBarOpen = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuBarOpen.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuBarOpen.classList.remove('open');
        menuOpen =false;
    }
});