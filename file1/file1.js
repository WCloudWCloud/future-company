
$(document).ready(function(){


 //Project slider---5D Web美術館

 $('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    margin: 24,
    smartSpeed:1000,
    responsive:{
        0:{
            items: 1,
            margin: 0,
            nav:false,
        },
        768:{
           items: 2,
        },
        1140:{
            items: 2,
            center: true,
            dots: true,
        }
    }
});

});


/*---Init Owl Carousel --*/
  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        },
        1440:{
          items:3,
          nav:true,
          loop:false
        },
        2560:{
          items:4,
          nav:true,
          loop:false
        }
    }
});
  


// Active Nav links


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add ('active');
            });
        };
    });
};


//--Javascript for Menu btn-------
    
        document.querySelector('#menu-btn').onclick = () => {
            document.querySelector('#menu-btn').classList.toggle('fa-times');
            document.querySelector('.navbar').classList.toggle('active')
        }






