
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.container'),
//     smooth: true
// });
let tl = gsap.timeline()
gsap.from(".logo",{
  y:-50,
  duration:.5,
  opacity:0
})
gsap.from(".nav-items li",{
  y:50,
  duration:.8,
  stagger:0.5,
  opacity:0
})
gsap.from(".content h2",{
    y:100,
    duration:.5,
    opacity:0
})
gsap.from(".content h1",{
    x:500,
    duration:1,
    opacity:0,
    stagger:.5
})
gsap.from(".heading-box",{
    opacity:0,
    duration:1,
    y:200,
    // delay:5,
    scrollTrigger:{
        trigger:".heading-box",
        scroller: "main",
        // markers:true,
        start:"top 50%"
    }
})


const imageContainer = document.querySelector(".section-four")
const fixed = document.querySelector(".fixed")
const image  = document.querySelector(".fixed img")
const elements = document.querySelectorAll(".element")
const h1 = document.querySelector("#design")
const h2 = document.querySelector("#project")
const h3 = document.querySelector("#execution")
const slider = document.querySelector(".slider")
const imageOne = document.querySelector("#img1")
const imageTwo = document.querySelector("#img2")
const imageThree = document.querySelector("#img3")
const imageDiv = document.querySelector('.image-box')


function imageAnimation() {
   
imageContainer.addEventListener('mouseenter',function() {
    fixed.style.display = "block"
})
imageContainer.addEventListener('mouseleave',function() {
    fixed.style.display = "none"
})

elements.forEach(function(e){
 e.addEventListener('mouseenter',function () {
    const url = e.getAttribute("data-img")
    fixed.style.backgroundImage = `url(${url})`
 })

}) 
}
function headingAnimation() {
    h1.addEventListener('click',function() {
    
        h1.style.color = "#fff"
        h2.style.color = "#504A45"
        h3.style.color = "#504A45"
        slider.style.top = '0%'
        
    })
    h2.addEventListener('click',function() {
    
        h1.style.color = "#504A45"
        h2.style.color = "#fff"
        h3.style.color = "#504A45"
        slider.style.top = '33%'
        
    })
    h3.addEventListener('click',function() {
    
        h1.style.color = "#504A45"
        h2.style.color = "#504A45"
        h3.style.color = "#fff"
        slider.style.top = '66%'        
    })  
}
imageAnimation()
headingAnimation()



const animateHeading = document.querySelectorAll('.headings h1')
const allImages = document.querySelectorAll('.image img')
imageDiv.style.backgroundImage = `url(./images/project1.webp)`
animateHeading.forEach(function (e) {
    e.addEventListener('click',function () {
       let url =  e.getAttribute('data-src')
       console.log(url);
       imageDiv.style.backgroundImage = `url(${url})`
    
    })
})

const cursorFollower = document.querySelector('.cursor')
const main = document.querySelector("main")
main.addEventListener('mousemove',function (dets) {
    gsap.to(cursorFollower,{
        top:dets.y + 'px',
        left:dets.x + 'px'
    }) 
    // cursorFollower.style.top = dets.y + 'px'
    // cursorFollower.style.left = dets.x + 'px'
   
})