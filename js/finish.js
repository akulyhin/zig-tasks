const textCheckbox = document.getElementById('text');
const link = document.getElementById('links');

textCheckbox.addEventListener('click', (e) => {
  if (e.target.checked && link.value.length > 2) {
    document.querySelector('.form-submit').removeAttribute('disabled');
  }

  else {
    document.querySelector('.form-submit').setAttribute('disabled', 'disabled');
  }
})

link.addEventListener('input', (e) => {
 if (e.target.value.length > 2 && textCheckbox.checked) {
  document.querySelector('.form-submit').removeAttribute('disabled');
 }

 else {
  document.querySelector('.form-submit').setAttribute('disabled', 'disabled');
 }
})



var message = '<center><p class="success"><b>Проект успешно отправлен на проверку! Спасибо!</b></p></center>';

$(document).ready(function() {
    $('#project').submit(function() {
      $('.form-submit').attr('disabled', 'disabled');
      $('#project').hide('slow');
      $('#post_form_success').html(message);
        $.post("https://calltrack.com.ua/projects/telegram.php", $("#project").serialize(),  function(response) {
            $('#post_form_success').html(response);
            $('button.form-submit').attr('disabled', false);
        });
        return false;
    });
  });