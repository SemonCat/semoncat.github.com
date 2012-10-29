$(document).ready(function() {
    $('pre').addClass('prettyprint linenums');
    $('.entry a').each(function(index, element) {
        var href = $(this).attr('href');
        if(href.indexOf('#') == 0) {} else if(href.indexOf('/') == 0 || href.toLowerCase().indexOf('semoncat.github.com') > -1) {} else {
            $(this).attr('target', '_blank');
            $(this).addClass('external');
        }
    });
    prettyPrint();
});