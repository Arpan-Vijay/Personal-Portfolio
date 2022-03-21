const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector("#nav-content");
const closeBtn = document.querySelector("#nav-content .close-btn");
const navLinks = document.querySelectorAll("#nav-content nav ul li a");
const scrollButton = document.querySelector('#scroll-top');

// Hamburger Button
hamburgerMenu.addEventListener("click", ()=> {
    navContent.classList.add("show");
    document.body.style.overflow="hidden" 
})

closeBtn.addEventListener("click", ()=>{
    navContent.classList.remove("show");
    document.body.style.overflow="initial"; 
})

navLinks.forEach(link => {
    link.addEventListener("click", ()=>{
        navContent.classList.remove("show");
        document.body.style.overflow="initial";
    })
})

// Scroll Button
if(scrollButton){
    window.addEventListener('scroll', ()=> {
        if(pageYOffset > (window.innerHeight * 1.2)){
            scrollButton.style.display = 'flex'
        }
        else{
            scrollButton.style.display = 'none'
        }
    })
    scrollButton.addEventListener('click', ()=> {
        window.scroll(0, 0)
    })
}