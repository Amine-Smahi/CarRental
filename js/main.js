$(document).ready(function() {

    // Hamburger Menu & Icon
    $('.hamburger').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('opened');
        $('header nav').toggleClass('active');
    });

    // Advanced Search Form & Icon
    $('#advanced_search_btn').on('click', function(event) {
        event.preventDefault();
        var advancedSearchBox = $('.advanced_search');

        if (!advancedSearchBox.hasClass('advanced_displayed')) {
            $(this).addClass('active');
            advancedSearchBox.stop().fadeIn(200).addClass('advanced_displayed');
        } else {
            $(this).removeClass('active');
            advancedSearchBox.stop().fadeOut(200).removeClass('advanced_displayed');
        }
    });

});
