//COMMON HEADER
const headerContainer = document.createElement("header");
headerContainer.innerHTML = `<nav class="navbar">
            <div class="logo"><a href="#"><img src="/images/beXceptionalLogoRound.PNG" alt="Be Exceptional Logo"></a></div>

            <div class="align-right">
            <ul class="menu" id="menu">
                <li><a href="/index.html" class="menu-btn">Home</a></li>
                <li><a href="/navigation/programs.html" class="menu-btn">Programs</a></li>
                <li><a href="/navigation/fellow.html" class="menu-btn">Become a fellow</a></li>
                <li><a href="/navigation/donate.html" class="menu-btn">Donate</a></li>
                <li><a href="/navigation/blog.html" class="menu-btn">Blog</a></li>
                <li><a href="/navigation/about.html" class="menu-btn">About</a></li>
                <li><a href="/navigation/contact.html" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-icon">
               <i class="fas fa-bars"></i>
            </div>
            </div>
    </nav>

    <div class="scroll-up-btn">
    <i class="fas fa-angle-up"></i>
</div>
`;
document.body.prepend(headerContainer);

//ACTIVE LINKLINK APPEARANCE
document.addEventListener("DOMContentLoaded", function(){
    const menuLinks = document.querySelectorAll(".menu-btn,submenu li a");
    
    menuLinks.forEach(function(link){
        link.addEventListener("click", function(event){

            menuLinks.forEach(function(menuLink){
                menuLink.classList.remove("active");
            });

            link.classList.add("active");
        });

        if (window.location.href.includes(link.getAttribute("href"))){
            link.classList.add("active");
        }
    });
});

//STICKY BAR toggle

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
  
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });
  
    // ---------move to top script ------------
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })
  
  // ------------ toggle menu script ------------
  
  $('.menu-icon i').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-icon i').toggleClass("active");
  })
  
  });


//COMMON FOOTER
const footerContainer = document.createElement("footer");
footerContainer.innerHTML = `<div class="footer">
<div class="footer-links">
    <h2>Quick links</h2>
    <li> <a href="navigation/programs.html">programs</a> </li>
    <li> <a href="/navigation/fellow.html">Become a fellow</a> </li>
    <li> <a href="/navigation/donate.html">Donate</a></li>
    <li> <a href="/navigation/donate.html">Partner</a> </li>
    <li> <a href="/navigation/donate.html">Volunteer</a> </li>
    <li> <a href="/navigation/blog.html">Blog</a> </li>
    </div>
    <div class="icon-content">
    <div class="socials">  CONNECT WITH US</div>
    <div class="icon-links">
    <a href="https://www.facebook.com"><i class="fab fa-facebook-f">
        </i></a>
    <a href="https://www.linkedin.com"><i class="fab fa-linkedin-in">
        </i></a>
    <a href="https://www.twitter.com"><i class="fa-brands fa-twitter">
        </i></a>
    <a href="https://www.youtube.com"><i class="fab fa-youtube">
        </i></a>
    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="footer-line"></div>
    <div class="copyright">
        <p> &copy; Be Exceptional Teachers Foundation 2023</p>
    </div>
</div>
`;

document.body.appendChild(footerContainer);
