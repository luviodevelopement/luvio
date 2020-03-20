
let menuList,navigationOpener, pageNext, pageBack, pages, pageIndicator;
let pageNumber = 0;
const pageContentClass = '.pageContent';
const pageIndicatorClass = '.bar-item';

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
    pages = document.querySelectorAll(pageContentClass);
    pageIndicator = document.querySelectorAll(pageIndicatorClass);

    pageNext.addEventListener('click', function () {
        pages[pageNumber].classList.add('hide');
        pageIndicator[pageNumber].classList.remove('bar-item--active');
        pageNumber = ++pageNumber < pages.length ? pageNumber : 0;
        pages[pageNumber].classList.remove('hide');
        pageIndicator[pageNumber].classList.add('bar-item--active');
        if(pageNumber === 0)
            pageBack.classList.add('hide');
        else if(pageNumber === 1){
            pageBack.classList.remove('hide')
        }

    });

    pageBack.addEventListener('click', function () {
        pages[pageNumber].classList.add('hide');
        pageIndicator[pageNumber].classList.remove('bar-item--active');
        pageNumber = pageNumber !== 0 ? --pageNumber : pages.length - 1;
        pages[pageNumber].classList.remove('hide');
        pageIndicator[pageNumber].classList.add('bar-item--active');
        if(pageNumber === 0)
            pageBack.classList.add('hide');
        else if(pageNumber === 1){
            pageBack.classList.remove('hide')
        }
    });
});
