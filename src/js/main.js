
let menuList,navigationOpener, pageNext, pageBack, actualPage;
let pageNumber = 0;
let pageContents = ['header-content', 'process-content', 'portfolio-content', 'contact-content', 'footer-content'];
document.addEventListener("DOMContentLoaded", function() {
    //navigation
    menuList = document.getElementById("navigationList");
    navigationOpener =  document.getElementById('navOpener');

    navigationOpener.addEventListener('click', function() {
        if (!menuList.classList.contains('nav__list--open')) {
            menuList.classList.add('nav__list--open');
        }else {
            menuList.classList.remove('nav__list--open')
        }
    });

    //page switcher
    pageBack = document.getElementById('pageBack');
    pageNext = document.getElementById('pageNext');

    pageNext.addEventListener('click', function () {
        console.log(pageNumber);
        document.getElementById(pageContents[pageNumber]).classList.add('hide');
        pageNumber = pageNumber < pageContents.length - 2 ? ++pageNumber : 0;
        document.getElementById(pageContents[pageNumber]).classList.remove('hide');



    });



});
