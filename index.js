const sides = document.querySelector('.track');
const slides = Array.from(sides.children);

 
 //button

 const nextButton = document.querySelector('.right');
 const prevButton = document.querySelector('.left');

 

  // slides position  
const slideSize = slides[0].getBoundingClientRect().width;
const setslidesPosition = (slide,index) =>
{
    slide.style.left = slideSize * index + 'px';   // styling  all the childnodes of ul with the help of getBoundingClientRect
}
 slides.forEach(setslidesPosition);

 // move  slide 

  const movetoslide = (sides,currentSlide,targetslide)=>
{
      sides.style.transform = 'translate(-'+ targetslide.style.left +')';
      currentSlide.classList.remove('current');
      targetslide.classList.add('current');


}





 // for addEvent for right button
 nextButton.addEventListener('click',moveSlide=>
 {
        const currentSlide = sides.querySelector('.current');
         const nextslide = currentSlide.nextElementSibling;
          const currentDot = DotNav.querySelector('.first');
           const nextdot = currentDot.nextElementSibling;
        movetoslide(sides,currentSlide,nextslide);
        updateDot(currentDot,nextdot)

 }
 
 )
 // for left button
   prevButton.addEventListener('click',movesilde=>
   {
         const lastslide = sides.querySelector('.current');
          const prevslide = lastslide.previousElementSibling;
          const currentDot = DotNav.querySelector('.first');
          const  prevdot = currentDot.previousElementSibling;
           // move to pervious slide 
        movetoslide(sides,lastslide,prevslide);
        updateDot(currentDot,prevdot);
  
         
            
   });
    //  dot indicator active color change
    const updateDot = (currentDot,dottarget)=>
    {

      currentDot.classList.remove('first');
      dottarget.classList.add('first');
    }
   // Circle nav button

const DotNav = document.querySelector('.slider-nav');
const dot = Array.from(DotNav.children);
// i
   
     DotNav.addEventListener('click',e=>
     {
        // to know what indicator was click on
            const dottarget = e.target.closest('button');  // to target buttons only 
            if(!dottarget) return;  
       const currentSlide = sides.querySelector('.current');
       const currentDot = DotNav.querySelector('.first');
       const dotIndex =  dot.findIndex(dot=> dot === dottarget);
       const targetslides = slides[dotIndex];
         movetoslide(sides,currentSlide,targetslides);
        updateDot(currentDot,dottarget);
        if( dotIndex === 0)
        {
             pervButton.classList.add('is-hidden');
        }
       
        
     });           
      
    
