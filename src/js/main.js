if (window.matchMedia('(max-width: 767px)').matches) {
    $('.fa-caret-square-left').toggle();
    $('.fa-caret-square-right').toggle();

    $('.navbar-left li a span').toggle();
    $('.navbar-left').toggleClass('small');
    $('.body-pane').toggleClass('small');
}


$('.menu-btn').click(function() {
    $('.fa-caret-square-left').toggle();
    $('.fa-caret-square-right').toggle();

    $('.navbar-left li a span').toggle();
    $('.navbar-left').toggleClass('small');
    $('.body-pane').toggleClass('small');

    if (localStorage.getItem('menu')) {
        localStorage.removeItem('menu');
    }
    else {
     localStorage.setItem('menu', 'active');
    }
})


if (localStorage.getItem('menu')) {
    $('.fa-caret-square-left').toggle();
    $('.fa-caret-square-right').toggle();

    $('.navbar-left li a span').toggle();
    $('.navbar-left').toggleClass('small');
    $('.body-pane').toggleClass('small');
}



$('.menu li').click(function() {
    $('.menu li').removeClass('active');
    $(this).addClass('active');
})


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


if (!getCookie('tooltip')) {
    setTimeout (() => {
        $(function () {
            $('.tooltip-show').tooltip('show');
        })

        setCookie('tooltip', true, {'max-age': 3600, secure: true});


        setTimeout(() => {
            $(function () {
                $('.tooltip-show').tooltip('hide');
            })
        }, 20000)

    }, 30000)
}


const menuLi = document.querySelectorAll('.menu li');

menuLi.forEach(item => {
    if (window.location.pathname !== '/zig-tasks/') {
        item.classList.remove('active');
        if (item.children[0].href, item.children[0].href.indexOf(window.location.pathname) !== -1) {
            item.classList.add('active');
        }
    }
})