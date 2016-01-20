// http://stackoverflow.com/questions/3432656/scroll-to-a-div-using-jquery

function scrollTo(id) {
    
    id = id.replace("A", "");
    
    $('html, body').animate({
        scrollTop: $('#'+id).offset().top
    }, 'slow');
    
}

$("#navbar-1 > ul > li > a").click(function(e) {
    
    e.preventDefault();
    scrollTo(this.id);
    
});