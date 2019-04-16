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
    $(".phoneValid").mask("+7-(999)-999-99-99");

    $('.wDetailPhotoItems').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.wDetailCertItems').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.contactInstallers__items').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.alInfo__items').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.aboutVideo__items').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

$(window).on("load", function () {

});

let menuMobileOpenBtn = document.querySelector('.menuMobileOpenBtn');
let menuMobileCloseBtn = document.querySelector('.menuMobileCloseBtn');
let mobileMenu = document.querySelector('.mobileMenu');
let paranja = document.querySelector('.menuMobileParanja');
let body = document.querySelector('body');

menuMobileOpenBtn.addEventListener('click', e => {
    e.preventDefault();

    body.classList.add('stopScroll');
    mobileMenu.classList.toggle('active');
    paranja.classList.toggle('active');
});

menuMobileCloseBtn.addEventListener('click', e => {
    e.preventDefault();

    body.classList.remove('stopScroll');
    mobileMenu.classList.toggle('active');
    paranja.classList.toggle('active');
});

document.addEventListener('click', e => {
    let target = e.target;

    if (target.classList.contains('menuMobileParanja')) {
        mobileMenu.classList.toggle('active');
        paranja.classList.toggle('active');
    }
});

const contactPopupMobile = () => {
    let mobileMenu = document.querySelector('.mobileMenu'),
        phone = document.querySelector('.headerContact__phone'),
        timeJobs = document.querySelector('.headerContact__time'),
        address = document.querySelector('.headerContact__address'),
        arPopupLink = Array.from(document.querySelectorAll('.headerPopupLink__text')),
        objContact = {
            phone : phone.textContent,
            timeJobs : timeJobs.textContent,
            address : address.textContent
        };

    let wrapperPopupLink = document.createElement('ul');
    wrapperPopupLink.className = 'wrapperPopupLink';

    const arrPopupLink = arPopupLink.map(link => {
        let wrapperPopupLinkItemLink = document.createElement('a');
        wrapperPopupLinkItemLink.className = 'wrapperPopupLink__link';
        wrapperPopupLinkItemLink.setAttribute('href', link.closest('.headerPopupLink').getAttribute('href'));

        let wrapperPopupLinkItem = document.createElement('li');
        wrapperPopupLinkItem.className = 'wrapperPopupLink__item';

        let wrapperPopupLinkItemCol_1 = document.createElement('div');
        wrapperPopupLinkItemCol_1.className = 'wrapperPopupLink__col';
        wrapperPopupLinkItemCol_1.innerHTML = link.closest('a').querySelector('.headerPopupLink__icon').outerHTML;

        let wrapperPopupLinkItemCol_2 = document.createElement('div');
        wrapperPopupLinkItemCol_2.className = 'wrapperPopupLink__col';
        wrapperPopupLinkItemCol_2.textContent = link.innerHTML.replace('<br>', ' ');

        wrapperPopupLinkItemLink.appendChild(wrapperPopupLinkItemCol_1);
        wrapperPopupLinkItemLink.appendChild(wrapperPopupLinkItemCol_2);

        wrapperPopupLinkItem.appendChild(wrapperPopupLinkItemLink);
        wrapperPopupLink.appendChild(wrapperPopupLinkItem);
    });

    mobileMenu.appendChild(wrapperPopupLink);

    let wrapperContact = document.createElement('ul');
    wrapperContact.className = 'wrapperwrapperContact';

    for (let contact in objContact) {
        let wrapperContactItem = document.createElement('li');
        wrapperContactItem.className = 'wrapperwrapperContact__item ' + contact;
        wrapperContactItem.textContent = objContact[contact];

        wrapperContact.appendChild(wrapperContactItem);
    }

    mobileMenu.appendChild(wrapperContact);
};

const menuMobile = () => {
    let arrLink = Array.from(document.querySelectorAll('.mobileMenuWrap a'));

    arrLink.forEach(link => {
        link.addEventListener('click', e => {
            let target = e.target,
                ul = target.closest('.mobileMenu__items'),
                ulCount = target.closest('li').querySelectorAll('ul').length;
            
            if (ulCount === 1) {
                let arrA = Array.from(target.closest('ul').querySelectorAll('a'));
                
                arrA.forEach(link => {
                    if (link.closest('ul').className === '') {
                        link.className = 'no-arrow';
                    }
                });
            }

            if (ul.classList.contains('hor')) {
                ul.style.transform = 'translateX(-100%)';
                target.nextElementSibling.style.display = 'block';

            } else {

                if (ulCount > 0) {

                    if (ulCount === 1) {
                        ul.style.transform = 'translateX(-200%)';
                    } else {
                        ul.style.transform = 'translateX(-100%)';
                    }

                    target.nextElementSibling.style.display = 'block';
                }
            }
        });
    });
};

const getMenu = () => {
    let mobileMenu = document.querySelector('.mobileMenuWrap'),
        arMenu = ['.menuHorizontal__items', '.menuVertical__items'],
        arRemoveTags = ['li', 'ul', 'a'];

    arMenu.forEach((menuClass) => {
        let menu = document.querySelector(menuClass);

        mobileMenu.insertAdjacentHTML('afterbegin', menu.outerHTML);

        let mobMenuHor = document.querySelector('.mobileMenuWrap').querySelector(menuClass);

        mobMenuHor.removeAttribute('class');

        arRemoveTags.forEach((tag) => {
            mobMenuHor.querySelectorAll(tag).forEach((item, i, arr) => {

                if (item.classList.contains('menuVerticalSub__title')) {
                    item.remove();
                } else {
                    item.removeAttribute('class');
                }

            });
        });

        mobMenuHor.querySelectorAll('div').forEach((item) => {
            if (!item.classList.contains('menuVertical__link-col')) {
                item.remove();
            } else {
                item.closest('a').insertAdjacentHTML('afterbegin', item.textContent.trim());
                item.remove();
            }
        });

        mobMenuHor.querySelectorAll('.commonCenter').forEach((item) => {
            item.remove();
        });

        let menuItem = Array.from(document.querySelectorAll('.mobileMenuWrap > ul'));

        menuItem.forEach((ul, i) => {
            if (i > 0) {
                ul.classList.add('hor');
            } else {
                ul.classList.add('mobileMenu__items');
            }
        });

        let menuMobileNew = Array.from(document.querySelectorAll('.mobileMenu__items'));
        for(let items of menuMobileNew) {
            items.insertAdjacentHTML('afterbegin', `<li class="mobileMenuSection">${items.dataset.name}</li>`);
            break;
        }

        let menuItemSub = Array.from(document.querySelectorAll('.mobileMenuWrap > ul ul'));

        menuItemSub.forEach(ul => {

            let creatLinkLiBack = document.createElement('li');
            creatLinkLiBack.classList.add('li_back');
            let creatLinkBack = document.createElement('a');
            creatLinkBack.textContent = 'Назад';
            creatLinkBack.dataset.back = "true";
            creatLinkBack.setAttribute('href', '#');
            creatLinkLiBack.appendChild(creatLinkBack);

            let creatLinkLiTitle = document.createElement('li');
            creatLinkLiTitle.classList.add('mobileSectionTitle');
            creatLinkLiTitle.textContent = ul.previousElementSibling.textContent.trim();

            if (ul.children[0].className !== 'li_back') {
                ul.insertBefore(creatLinkLiBack, ul.children[0]);
                ul.insertBefore(creatLinkLiTitle, ul.children[1]);
            }
        });
    });

    setTimeout(() => {
        monuMobileBack();
    }, 200);
};

const monuMobileBack = () => {
    let arrLink = Array.from(document.querySelectorAll('[data-back]'));

    arrLink.forEach(link => {
        link.addEventListener('click', e => {
            let target = e.target,
                ul = target.closest('.mobileMenu__items'),
                ulChildrenCount = target.closest('ul').querySelectorAll('ul').length;

            target.setAttribute('href', '#');

            if (ul.classList.contains('hor')) {
                ul.style.transform = 'translateX(0)';
            } else {
                if (ulChildrenCount === 0) {
                    ul.style.transform = 'translateX(-100%)';
                } else {
                    ul.style.transform = 'translateX(0)';
                }
            }

            setTimeout(() => {
                target.closest('ul').style.display = 'none';
            }, 350);
        });
    });
};

getMenu();
menuMobile();
contactPopupMobile();