

$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
    
        window.location.hash = hash;
      });
    } 
  });
});
  
VANTA.WAVES({
  el: "#ocean",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: '#5271ff',
  shininess: 150.00,
  waveHeight: 40.00,
  waveSpeed: 2.00,
  zoom: 1.49
})
  
const footer = document.querySelector('footer');

$(window).scroll(function() {
  var hT = $('#scroll-to').offset().top,
      hH = $('#scroll-to').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    footer.classList.remove('invisible');    
  }
});