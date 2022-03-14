////header info modal

let headerBtn = document.querySelector('.header-info');
 headerBtn.addEventListener('click',()=> {
    headerBtn.classList.toggle('headerBtnShow');
 });

///// nav byrger menu
 let burgerBtn = document.querySelector('.burger');
 let navItems = document.querySelector('.nav-items');
  burgerBtn.addEventListener('click',()=> {
    burgerBtn.classList.toggle('burgerBtn');
    navItems.classList.toggle('navItemsShow');
  });

  ///header content btn
  let headerContentBtnShow = document.querySelector('.header-content__Btn');
  let headerContent = document.querySelector('.header-content');
  let headerClose = document.querySelector('.fa-xmark');
   headerContentBtnShow.addEventListener('click',()=> {
    headerContent.classList.add('headerContentBtnShow');
  });
  headerClose.addEventListener('click',()=> {
   headerContent.classList.remove('headerContentBtnShow');
  });

  ///nav appointment btn modal
  let navBtn = document.querySelector('.nav-appointment');
  let navContent = document.querySelector('.nav-appointment__content');
   navBtn.addEventListener('click',()=> {
    navContent.classList.add('navBtnShow');
    navContentClose.classList.remove('navBtnShow');
   });
   let navContentClose = document.querySelector('.fa-circle-xmark');
   navContentClose.addEventListener('click',()=> {
    navContent.classList.remove('navBtnShow');
   });

   //// carousel left content slides

   const slider = document.querySelector('.carousel-left__items'),
    active = document.querySelector('#active'), 
    line1 = document.querySelector('#line-1'), 
    line2 = document.querySelector('#line-2'), 
    line3 = document.querySelector('#line-3'), 
    line4= document.querySelector('#line-4');

    line1.addEventListener('click',()=> {
      slider.style.transform = "translateY(0)";
      active.style.top = "0";
    });
    line2.addEventListener('click',()=> {
      slider.style.transform = "translateY(-265px)";
      active.style.top = "75px";
    });
    line3.addEventListener('click',()=> {
      slider.style.transform = "translateY(-530px)";
      active.style.top = "150px";
    });
    line4.addEventListener('click',()=> {
      slider.style.transform = "translateY(-795px)";
      active.style.top = "225px";
    });

   /////carousel right content

   let index = 0;
    showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-right__item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    index++;
    if (index > slides.length) {index = 1}    
    slides[index-1].style.display = "block";  
    setTimeout(showSlides, 3000);
  }



  