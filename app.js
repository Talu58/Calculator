$(document).ready(function() {
  let str = '';

  $('.number').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('.operation').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

  $('#clear').on('click', function(e) {
    str = '';
    $('#display').html(str);
  });

  $('#equal').on('click', function(e) {
    let result = eval(str);
    str = result;
    $('#display').html(str);
  });

})