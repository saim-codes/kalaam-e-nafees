/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')
 




/* Menu show */
navToggle.addEventListener('click', () =>{
   gsap.from(".nav__item", {
      opacity: 0,
      duration:0.5,
      y: 15,
      stagger: 0.3,
     
   })

   navMenu.classList.add('show-menu')
   navToggle.classList.add('toggle__hidden')
 
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
   navToggle.classList.remove('toggle__hidden')
})




let tl = gsap.timeline()


      
tl.from(".category__unit",
   {
      "--pseudo-category":"0%",
      opacity: 0,
      duration: 1.25,
      delay: 0.5,
      y: 10,
      stagger:0.3,
      ease: "power2.inOut",
   
   });

   
   tl.from(".shair .misra",
      {
         opacity: 0,
         duration: 1.5,
         x: 10,
         stagger:0.3,
      });
   tl.from(".mukhammas__misra",
      {
         opacity: 0,
         duration: 1.5,
         x: 10,
         stagger:0.3,
      }, "-=2");





document.addEventListener("DOMContentLoaded", function () {
   window.addEventListener("load", function () {
      const loadingScreen = document.getElementById("loading-screen");

      // Duration for which the loading screen is displayed (in milliseconds)
      const loadingDuration = 3000; // 3 seconds

      // Set a timeout to hide the loading screen after the specified duration
      setTimeout(function () {

        
         


         tl.from(".nav__logo",
            {
               opacity: 0,
               duration: 0.6,
               delay: 0.5,
               y: -6,
               ease: "power2.inOut",

            }, "-=0.5");
         tl.from("#nav-toggle",
            {
               opacity: 0,
               duration: 0.4,
               
               y: 10,

            });


         tl.from(".left__cover",
            {
               opacity: 0,
               duration: 0.5,
               y: 10,
            }, "-=0.25");

         tl.from(".right__cover",
            {
               opacity: 0,
               duration: 0.5,
               x:15,
               ease: "power2.inOut",
               

            }, "-=0.25");

         tl.from(".poet__bio",
            {
               opacity: 0,
               duration: 0.5,
               y: 10,
            }, "-=0.25");

         tl.from(".short__desc",
            {
               opacity: 0,
               duration: 0.5,
               y: 10,
            }, "-=0.15");

         tl.from(".intekhaab",
            {
               opacity: 0,
               duration: 0.5,
               y: 10,
               
            });

         tl.from(".timeline__featured",
            {
               opacity: 0,
               duration: 0.5,
               x: 10,
               stagger:0.3,
            }, "-=0.5");

         tl.from(".scroll__featured",
            {
               opacity: 0,
               duration: 0.6,
               x: 10,
               stagger:0.2,
               scrollTrigger:{
                  trigger: ".scroll__featured", 
                  start: "top 93%",  
                   end: "top 60%",  
                  scrub: 2,
               }
            });
         tl.from(".featured__shair__wrapper",
            {

               opacity: 0,
               duration: 0.6,
              "--pseudo-width":0,
               stagger:0.2,  
            }, "-=0.5");

       

      


         // Add fade-out class
         loadingScreen.classList.add("fade-out");
         // Wait for the fade-out transition to complete
         loadingScreen.addEventListener("transitionend", function () {
            loadingScreen.style.display = "none";
         });
      }, loadingDuration);
   });
});

const filled = document.getElementsByClassName('.filled');
function story () {
   filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
   requestAnimationFrame(story);
}

story();

  




