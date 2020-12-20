// for showing and hiding the menu
$(window).on("load", function(){
    const firstElem = $(".case-start");
    const sidebar = $("#case-sidebar");
    $(document).on("scroll", function(){
    const userPos = $(this).scrollTop();
        if(userPos >= firstElem.offset().top) {
            sidebar.removeClass("hidden");
        } else {
            sidebar.addClass("hidden");
        }
    });
})

// $(document).ready(function(){
//     const firstElem = $(".case-start");
//     const sidebar = $("#case-sidebar");
//     $(document).on("scroll", function(){
//     const userPos = $(this).scrollTop();
//         if(userPos >= firstElem.offset().top) {
//             sidebar.removeClass("hidden");
//         } else {
//             sidebar.addClass("hidden");
//         }
//     });
// })