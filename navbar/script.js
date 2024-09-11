/*=============== SHOW MENU ===============*/
const navManu=document.getElementById("nav-menu")
const navToggle=document.getElementById("nav-toggle")
const navClose=document.getElementById("nav-close")

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navManu.classList.add("show-menu")
        navClose.style.display="block"
    })
}
if(navClose){
    navClose.addEventListener("click",()=>{
        navManu.classList.remove("show-menu")
        navClose.style.display="none"
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
  const navLink=document.querySelectorAll(".nav__link")
   const linkAction=()=>{
    const navManu=document.getElementById("nav-menu")
    navManu.classList.remove("show-menu")
    navClose.style.display="none"

   }
   navLink.forEach(n=>n.addEventListener("click",linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader=()=>{
    const header=document.getElementById("header")
    this.scrollY >=50? header.classList.add("bg-header")
                      :header.classList.remove("bg-header")

}
window.addEventListener('scroll',bgHeader)
bgHeader()

/*=============== SWIPER SERVICES ===============*/ 

const swiperServices = new Swiper('.services__swiper', {
   
    loop: true,
    grabCursor:true,
    spaceBetween:24,
    slidesPreView:'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
/*=============== SHOW SCROLL UP ===============*/ 
  const scrollUp=()=>{
    const scrollUp=document.getElementById("scroll-up")
    this.scrollY>=350?scrollUp.classList.add("show-scroll")
                     :scrollUp.classList.remove("show-scroll")
  }
window.addEventListener("click",scrollUp)
scrollUp()
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=querySelectorAll('section[id]')

const scrollActive=()=>{
    const scrollDown=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop -58,
        sectionId=current.getAttribute("id"),
        sectionClass=document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollDown>sectionTop && scrollDown<=sectionTop+sectionHeight){
            sectionClass.classList.add("active-link")
        }else{
            sectionClass.classList.remove("active-link")
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
