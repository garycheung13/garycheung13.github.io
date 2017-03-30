var a = $(".navbar").offset().top + 50;

$(document).scroll(function(){
    if($(this).scrollTop() > a){
       $('.navbar').css({
           "background"        :"white",
           "border-bottom"     :"solid 1px grey",
           "padding-top"       :"15px",
           "padding-bottom"    :"15px",
           "color"             :"#1E1E1E",
           "transition"        :"all 250ms"});
        $('.navbar li:last-child').css({
            "border"           :"solid 1px #1E1E1E"
        });

        } else {
           $('.navbar').css({
               "background"        :"transparent",
               "color"             :"white",
               "padding-top"       :"30px",
               "border-bottom"     :"none",
               "padding-bottom"    :"30px"});
           $('.navbar li:last-child').css({
               "border"           :"solid 1px white"
        });
        }
    });
$(document).ready(function(){
    var aChildren = $("ul.navbar li.highlightable").children(); // find the a children of the list items
       var aArray = []; // create the empty aArray
       for (var i=0; i < aChildren.length; i++) {
           var aChild = aChildren[i];
           var ahref = $(aChild).attr('href');
           aArray.push(ahref);
       } // this for loop fills the aArray with attribute href values

       $(window).scroll(function(){
           var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
           var windowHeight = $(window).height(); // get the height of the window
           var docHeight = $(document).height();

           for (var i=0; i < aArray.length; i++) {
               var theID = aArray[i];
               var divPos = $(theID).offset().top; // get the offset of the div from the top of page
               var divHeight = $(theID).height(); // get the height of the div in question
               if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                   $("a[href='" + theID + "']").addClass("nav-active");
                //    console.log("Working");
               } else {
                   $("a[href='" + theID + "']").removeClass("nav-active");
               }
           }
           if(windowPos + windowHeight == docHeight) {
               var lastLink = aArray[aArray.length - 1];
               if (!$(lastLink).hasClass("nav-active")) {
                   $("a[href='" + lastLink + "']").addClass("nav-active");
                //    var navActiveCurrent = $(".nav-active").attr("href");
                //    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                //    $(lastLink).addClass("nav-active");
               }
           }
       });
   });

if ($(window).width() > 901) {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
             return false;
            }
        }
    });

}
