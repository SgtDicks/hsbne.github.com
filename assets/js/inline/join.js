$(document).ready(function () {
  var $form = $('form.join');
  var $thanks = $('.thanks');
  var $iframe = $('#iframe_joinform');

  // Make the h5validate script work nicely with bootstrap
  $form.h5Validate({
    errorClass: '',
    validClass: ''
  });
  $form.bind('formValidated', function (e, data) {
    $(data.elements).each(function (index, el) {
      $(el.element).closest('.control-group').toggleClass('error', !el.valid);
      $(el.element).closest('.control-group').toggleClass('success', el.valid);
    });
  });
  $form.find('input,textarea,select').bind('validated', function (e, data) {
    $(data.element).closest('.control-group').toggleClass('error', !data.valid);
    $(data.element).closest('.control-group').toggleClass('success', data.valid);
  });

  var formsubmitted = false;

  $iframe.load(function (e) {
    if (formsubmitted) {
      $form.fadeOut(500, function () {
        $thanks.fadeIn(500);
      });
    }
  });

  $form.submit(function (e) {
    formsubmitted = true;
    
    var jqxhr = $.post( "http://porthack.hsbne.org:81/seltzer/make_new_user_return_unique_username.php", function() {
alert( "success" );
})
.done(function() {
alert( "second success" );
})
.fail(function() {
alert( "error" );
})
.always(function() {
alert( "finished" );
});
    
    
  });
});

