$('.filmeCarrousel').slick({
    dots: true,
    infinite: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  let count = 1;
  document.getElementById("radio1").checked = true;
  
  setInterval( function(){
    nextImage();
  }, 5000)

  function nextImage(){
    count++;
    if(count>4){
      count = 1;
    }
    document.getElementById("radio1"+count).checked = true;
    
  }
