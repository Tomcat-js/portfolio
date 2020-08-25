

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
      color: 0x112d4e
    })
  
  const footer = document.querySelector('footer');
  const scrollClick = document.querySelector('.scroll_click');
  
  scrollClick.addEventListener('click', () => {
    footer.classList.remove('invisible');
  })