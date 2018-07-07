$(document).ready(function(){
    var selectedvalue="";
     
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    $('.carousel').carousel({
      interval: 2000,
    });

    // $('.carousel-control-prev').carousel('prev');
    // $('.carousel-control-next').carousel('next');

    var availableTags = [
      "Asp.net MVC",
      "C",
      "C++",
      "COBOL",
      "Java",
      "JavaScript",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#txtSearch" ).autocomplete({
      source: availableTags,
      autofill: true,
      select: function(e, ui){
        selectedvalue = ui.item.label;
        $('.modal').modal('show');
        $('#lblselectedValue').text(selectedvalue);
      }
    });

    $('#btnSearch').on('click', function(){
      alert("you have searched for "+selectedvalue);
      $('.modal').modal('show');
      $('#lblselectedValue').text(selectedvalue);
    });

    $('.rowCard').on('click', function(){
      location.href = "details.html";
    })

    var bgimg = ["images/img1.jpeg", "images/img2.jpg", "images/img3.jpg"];
    var len = bgimg.length;
    var imgCnt = 0;
    doScroll(imgCnt);
    setInterval(function(){
      doScroll(imgCnt);
      imgCnt++;
      if(imgCnt >= len) { imgCnt =0;}
    }, 2000);


    function doScroll(i) {
      $('.bgImg').css("background-image", "url("+ bgimg[i]+")");
    }

    $('#screen2').hide();
    $('#screen3').hide();

    $('#btnNextScreen1').click(function(){
      $('#screen1').hide();
      $('#screen2').show();
    });

    $('#btnNextScreen2').on('click', function(){
      $('#screen2').hide();
      $('#screen3').show();
    });

    $('#btnNextScreen3').on('click', function(){
      alert("You will recieve information via SMS shortly!, Thank you");
      location.href="list.html";
    });

    $('#btnBackScreen2').on('click', function(){
      $('#screen2').hide();
      $('#screen1').show();
    });

    $('#btnBackScreen3').on('click', function(){
      $('#screen3').hide();
      $('#screen2').show();
    });




  });
        