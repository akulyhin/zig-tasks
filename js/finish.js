$(document).ready(function() {
    $('#project').submit(function() {
      $('button.form-submit').attr('disabled', 'disabled');
        $.post("https://calltrack.com.ua/projects/telegram.php", $("#project").serialize(),  function(response) {
            $('#project').hide('slow');
            $('#post_form_success').html(response);
            $('button.form-submit').attr('disabled', false);
        });
        return false;
    });
  });