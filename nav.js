var selector = '.navigation li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});