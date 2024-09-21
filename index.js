/* var numSlides =9;
var autoplay= true;

function slideback() {
   document.images.slide.src = eval("image"+step+".src");
   if (step > 1) {
      step--;
   }
   else {
      step = numSlides;
   }

}

function slideit() {
   var step=1;
   document.images.slide.src = eval("image"+step+".src")
   if (step < numSlides) {
      step++
   }
   else {
      step = 1
   }
   if (autoplay == true) {
   setTimeout("slideit()",2500)
   }
} */