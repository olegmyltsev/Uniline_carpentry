const slides = document.querySelectorAll(".slider__item"),
    slidesWrapper = slides[1].parentElement
let count = 1

let slideShow = setInterval(slide,3000)
let slideShowStart = null
function slide (){
    slides.forEach((item) => {
        item.classList.remove("animate__animated");
        item.classList.remove("animate__zoomIn");
        item.classList.remove("slider__item_active");
    })
    slides[count].classList.add('animate__animated')
    slides[count].classList.add('animate__zoomIn')
    slides[count].classList.add('slider__item_active')
    count++
    if(count>2) {count=0}
    console.log(count);
}
slidesWrapper.addEventListener("click", ()=>{
    slide()
    clearInterval(slideShow)
    clearTimeout(slideShowStart)

    slideShowStart = setTimeout(()=>{
        slideShow = setInterval(slide,3000)
    },5000)
})