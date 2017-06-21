//material contact form animation

$(document).ready(function() {
    $('.contact-form').find('.form-control').each(function() {
        var targetItem = $(this).parent();
        if ($(this).val()) {
            $(targetItem).find('label').css({
                'top': '10px',
                'fontSize': '14px'
            });
        }
    });
    $('.contact-form').find('.form-control').focus(function() {
        $(this).parent('.input-block').addClass('focus');
        $(this).parent().find('label').animate({
            'top': '10px',
            'fontSize': '14px'
        }, 300);
    });
    $('.contact-form').find('.form-control').blur(function() {
        if ($(this).val().length === 0) {
            $(this).parent('.input-block').removeClass('focus');
            $(this).parent().find('label').animate({
                'top': '25px',
                'fontSize': '18px'
            }, 300);
        }
    });

    $('#submit').click(function() {

        $.post("send.php", $("#mycontactform").serialize(), function(response) {
            $('#success').html(response);
            $("#mycontactform")[0].reset();
        });
        return false;
    });

    $('#hamburg-toggle').click(function(e) {
        var $menuFlyOut = $("#menu-fly-out");
        $menuFlyOut.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
            if ($menuFlyOut.hasClass('open')) {
                $(this).css({ 'z-index': '33' });
            } 
        });

        $menuFlyOut.toggleClass("open").css({ 'z-index': '-1' });
        e.preventDefault();
    });

});
