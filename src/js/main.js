// var button = document.querySelector('#button');
// var button = document.querySelector('#modal');
// var button = document.querySelector('#close');


// button.addEventListener('click', function(){
//     modal.classList.add('modal_active');
// });

// close.addEventListener('click', function(){
//     modal.classList.removel('modal_active');
// });


$(document).ready(function(){

    // pripojeni_knihony

    new WOW().init();

    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });


   //validace formularu
   $('#brief-form').validate({
    rules:{
      username: "required",
      email:{
        required: true,
        email:true
      }
    },
    messages: {
      username: "Uvedte prosim vaše jméno",
      email: "Potřebujeme váš email"
    }
   });


    // napojeni slideru то что я  не понимаю
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__rigth'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
        ]      
    });

});