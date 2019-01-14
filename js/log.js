// ======= VALIDATION FOR THE ADD USER PAGE STARTED =====
$(function () {

  let dept = $('#exampleFormControlSelect1'),
    tex = $('input[type="text"]'),
    emial = $('input[type="email"]'),
    pass = $('input[type="password"]');

  $('form').on('submit', (e) => {

    if (dept.val() !== '' && tex[0].value !== '' && tex[1].value !== '' && emial.val() !== '' && pass !== '') {
      const load = $('#loaderss'),
        alert = $('.alert');
      load.fadeIn('slow');
      dept.children()[0].setAttribute('selected', 'selected');
      dept[0].style.border = '1px solid green';

      tex[0].style.border = '1px solid green';
      tex[1].style.border = '1px solid green';
      emial[0].style.border = '1px solid green';
      pass[0].style.border = '1px solid green';

      setTimeout(() => {

        load.fadeOut('slow');
        alert.fadeIn('4000');


      }, 3000);


      tex[0].value = '';
      tex[1].value = '';
      emial.val('');
      pass.val('');

    }



    e.preventDefault();
  });

});








// ======= VALIDATION FOR THE ADD A USER PAGE ENDED =======