$(document).ready(function() {
  let str = '';

  $('#0').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

  $('#1').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

  $('#2').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#3').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#4').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#5').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#6').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#7').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#8').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#9').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#add').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

   $('#minus').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });

  $('#multiply').on('click', function(e) {
    str += (e.target.innerHTML);
    $('#display').html(str);
  });
  
  $('#divide').on('click', function(e) {
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