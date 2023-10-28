    
    AOS.init();
    
    //READ MORE BUTTONS
     function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("moreBtn");
        
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more...";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
 
       //READ MORE BUTTONS 2
       function myFunction2() {
         var dots2 = document.getElementById("dots2");
         var moreText2 = document.getElementById("more2");
         var btnText2 = document.getElementById("moreBtn2");
         
         if (dots2.style.display === "none") {
           dots2.style.display = "inline";
           btnText2.innerHTML = "Read more...";
           moreText2.style.display = "none";
         } else {
           dots2.style.display = "none";
           btnText2.innerHTML = "Read less";
           moreText2.style.display = "inline";
         }
       }
       
       //READ MORE BUTTONS 3
       function myFunction3() {
         var dots3 = document.getElementById("dots3");
         var moreText3 = document.getElementById("more3");
         var btnText3 = document.getElementById("moreBtn3");
         
         if (dots3.style.display === "none") {
           dots3.style.display = "inline";
           btnText3.innerHTML = "Read more...";
           moreText3.style.display = "none";
         } else {
           dots3.style.display = "none";
           btnText3.innerHTML = "Read less";
           moreText3.style.display = "inline";
         }
       }
 