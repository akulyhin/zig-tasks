
var message = '<center><p class="success"><b>Проект успешно отправлен на проверку! Спасибо!</b></p></center>';

$(document).ready(function() {
    $('#project').submit(function() {
      $('button.form-submit').attr('disabled', 'disabled');
      $('#project').hide('slow');
      $('#post_form_success').html(message);
        $.post("https://calltrack.com.ua/projects/telegram.php", $("#project").serialize(),  function(response) {
            $('#post_form_success').html(response);
            $('button.form-submit').attr('disabled', false);
        });
        return false;
    });
  });