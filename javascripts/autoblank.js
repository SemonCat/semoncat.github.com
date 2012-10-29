$(document).ready(function() {
    $('pre').addClass('prettyprint linenums') //添加Google code Hight需要的class
    // 這段代碼是用來提取文章中鏈接到其他網站的鏈接
    // 然後給這寫鏈接加上外鏈的樣式，並且修改為在新窗口打開(target=_blank)
    $('.entry a').each(function(index, element) {
        var href = $(this).attr('href');
        if(href.indexOf('#') == 0) {} else if(href.indexOf('/') == 0 || href.toLowerCase().indexOf('beiyuu.com') > -1) {} else {
            $(this).attr('target', '_blank');
            $(this).addClass('external');
        }
    });
});