/*  START TABS */
let tabLinks = document.querySelectorAll(".service-tabs a");
let tabPanels = document.querySelectorAll(".block-img-text");
for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document
      .querySelector(".service-tabs li.active")
      .classList.remove("active");
    document.querySelector(".block-img-text.active").classList.remove("active");

    let parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    let index = [...parentListItem.parentElement.children].indexOf(
      parentListItem
    );

    let panel = [...tabPanels].filter(
      el => el.getAttribute("data-index") == index
    );
    panel[0].classList.add("active");
  });
}
/*  END TABS */

/*  START GREEN TREANGLE */
$(window).click(function(e){

  if( $(e.target).closest(".service-tabs").length > 0 ) {
      return false;
  }
  $(".green-triangle").css({
    display : "none"
  })

});

$(".service-tabs").on("focus", "li", function() {
 $(".green-triangle").css({
   display : "none"
 })
 $(this).find('div').css({
  display : "block"
})
});

/*  END GREEN TREANGLE */

/*  START BACKGROUND BUTTONS - CSS */
 $(".service-tabs li").on("focus", "a", function() {
 $(".service-tabs a").css({
    background: "rgb(248, 252, 254)",
     color: "#717171"
   });
   $(this).css({
    background: "#18cfab",
     color: "#fff"
   });
 });
 $(window).click(function(e){

  if( $(e.target).closest(".service-tabs").length > 0 ) {
      return false;
  }
  $(".service-tabs a").css({
    background: "rgb(248, 252, 254)",
     color: "#717171"
  })

});
/*  END BACKGROUND BUTTONS */

let btn = document.getElementById("load-more");
let allBtn = document.getElementById("all-button");
let anim = document.getElementById("container")
let number = 36;
htmlCollection = document.getElementsByClassName("our-amazing-img");
let arr = [...htmlCollection];
let x = arr.slice(0,36)
console.log(x.length)
btn.addEventListener("click", function(e){
  anim.style.display = "flex"
  setTimeout(function(){
  let d = arr.slice(12,24);
  for(i = 0; i<d.length; i++){
   d[i].className +=  " active"
   anim.style.display = "none"
}
}, 2000);
btn.addEventListener("click", function(e) {
  anim.style.display = "flex"
  setTimeout(function(){
  let d = arr.slice(24,36);
  for(i = 0; i<d.length; i++){
   d[i].className += " active"
   anim.style.display = "none"
   btn.remove();
  }
}, 2000);
})
})
allBtn.addEventListener("click", function(){
  for(i = 0; i<x.length; i++){
    x[i].className +=  " active"
 }
 btn.remove();

})

let gdBtn = document.getElementById("gd-button");

gdBtn.addEventListener("click", function(){
  for(i = 0; i<x.length; i++){
    x[i].classList.remove('active');
 }
 btn.remove();
 let graphicPage = document.querySelectorAll("[data-category='landing-page']");
 for(i = 0; i<graphicPage.length; i++){
  graphicPage[i].className +=  " active"
}
})

let wdBtn = document.getElementById("wd-button");

wdBtn.addEventListener("click", function(){
  for(i = 0; i<x.length; i++){
    x[i].classList.remove('active');
 }
 btn.remove();
 let webdesPage = document.querySelectorAll("[data-category='web-design']");
 for(i = 0; i<webdesPage.length; i++){
  webdesPage[i].className +=  " active"
}
})

let landBtn = document.getElementById("landing-button");

landBtn.addEventListener("click", function(){
  for(i = 0; i<x.length; i++){
    x[i].classList.remove('active');
 }
 btn.remove();
 let landPage = document.querySelectorAll("[data-category='landing-page']");
 for(i = 0; i<landPage.length; i++){
  landPage[i].className +=  " active"
}
})
let wordBtn = document.getElementById("word-button");

wordBtn.addEventListener("click", function(){
  for(i = 0; i<x.length; i++){
    x[i].classList.remove('active');
 }
 btn.remove();
 let wordPage = document.querySelectorAll("[data-category='wordpress']");
 for(i = 0; i<wordPage.length; i++){
  wordPage[i].className +=  " active"
}
})


$(".work-buttons").on("focus", "input", function() {
  $(".work-buttons input").css({
      color: "#717171"
    });
    $(this).css({
      color: "#18cfab"
    });
  });
  $(window).click(function(e){
 
   if( $(e.target).closest(".work-buttons").length > 0 ) {
       return false;
   }
   $(".work-buttons input").css({
      color: "#717171"
   })
 
 });
 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 25
  });