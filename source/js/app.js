$(window).ready(function () {
    $('.indexBanner__items').slick({
        dots: false,
        arrows: true,
        appendArrows: $('.indexBannerArrows'),
        prevArrow: '<button type="button" class="bannerNav__btn"><div class="icon-arrow-banner-left"></div></button>',
        nextArrow: '<button type="button" class="bannerNav__btn bannerNav__btn-right"><div class="icon-arrow-banner-right"></div></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true
                }
            }
        ]
    });
});

$(window).on("load",function(){
    $(".mobileMenu").mCustomScrollbar({
        theme:"dark"
    });
});

let mobileMenu = (() => {

    let getMenu = () => {
        let mobileMenu = document.querySelector('.mobileMenu'),
            arMenu = ['.menuVertical__items', '.menuHorizontal__items'],
            arRemoveTags = ['li', 'ul', 'a'];

        arMenu.forEach((menuClass) => {
            let menu = document.querySelector(menuClass);

            mobileMenu.insertAdjacentHTML('afterbegin', menu.outerHTML);

            let mobMenuHor = document.querySelector('.mobileMenu').querySelector(menuClass);

            mobMenuHor.removeAttribute('class');

            arRemoveTags.forEach((tag) => {
                mobMenuHor.querySelectorAll(tag).forEach((item) => {
                    if (item.textContent === 'Варианты') {
                        item.remove();
                    } else {
                        item.removeAttribute('class');
                    }
                });
            });

            mobMenuHor.querySelectorAll('div').forEach((item) => {
                item.remove();
            });
        });
    };

    return {
        init: () => {
            getMenu();
        }
    }
})();

mobileMenu.init();