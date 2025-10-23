
let bannerSwiper = new Swiper(".banner__slider", {
    slidesPerView: 1,
    spaceBetween: 2,
    speed: 500,
    effect: 'fade',
    pagination: {
        el: ".banner-pagination",
        clickable: true,
    },

});



let bestsellersSwiper = new Swiper(".bestsellers__slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: ".bestsellers-button-next",
        prevEl: ".bestsellers-button-prev",
    },
    pagination: {
        el: ".bestsellers-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});

let beststwoSwiper = new Swiper(".bestsellers-two__slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: ".bestsellers-button-next",
        prevEl: ".bestsellers-button-prev",
    },
    pagination: {
        el: ".bestsellers-two-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});











let selectSwiper = new Swiper(".our-selections__slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: ".our-select-button-next",
        prevEl: ".our-select-button-prev",
    },
    pagination: {
        el: ".our-select-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});



let stockSwiper = new Swiper(".stock-car__slider", {
    slidesPerView: 8,
    spaceBetween: 32,
    navigation: {
        nextEl: ".stock-button-next",
        prevEl: ".stock-button-prev",
    },
    pagination: {
        el: ".stock-car-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 8,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});














let stockSecSwiper = new Swiper(".stock-sec__slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: ".stock-sec-button-next",
        prevEl: ".stock-sec-button-prev",
    },
    pagination: {
        el: ".stock-sec-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});


let stocktwoSwiper = new Swiper(".stock-two__slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: ".stock-two-button-next",
        prevEl: ".stock-two-button-prev",
    },
    pagination: {
        el: ".stock-two-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});

let stockthreeSwiper = new Swiper(".stock-three__slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: ".stock-three-button-next",
        prevEl: ".stock-three-button-prev",
    },
    pagination: {
        el: ".stock-three-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});




let newsSwiper = new Swiper(".news-block__slider", {
    slidesPerView: 5,
    spaceBetween: 32,
    navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
    },
    pagination: {
        el: ".news-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1299': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '590': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});



let satisfiedSwiper = new Swiper(".satisfied__slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: ".satisfied-button-next",
        prevEl: ".satisfied-button-prev",
    },
    pagination: {
        el: ".satisfied-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1299': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});


let exclusiveSwiper = new Swiper(".exclusive__slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: ".exclusive-button-next",
        prevEl: ".exclusive-button-prev",
    },
    pagination: {
        el: ".exclusive-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});


let blogSwiper = new Swiper(".blog__slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: ".blog-button-next",
        prevEl: ".blog-button-prev",
    },
    pagination: {
        el: ".blog-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});




let magnitSwiper = new Swiper(".magnit__slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: ".magnit-button-next",
        prevEl: ".magnit-button-prev",
    },
    pagination: {
        el: ".magnit-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});











let partnersSwiper = new Swiper(".partners__slider", {
    slidesPerView: 6,
    spaceBetween: 32,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 3000,

    breakpoints: {
        '1599': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },

        '1299': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },

        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },

});





let partnersLogSwiper = new Swiper(".partners-log__slid", {
    slidesPerView: 6,
    spaceBetween: 32,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 3000,
    breakpoints: {
        '1599': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1299': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },

        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },

});
























let equipmentSwiper = new Swiper(".equipment-sm__slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    watchSlidesProgress: true,
    freeMode: true,
});
let equipmentSwiper2 = new Swiper(".equipment__slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: equipmentSwiper,
    },
});













let modelsellersSwiper = new Swiper(".modelsellers__slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: ".modelsellers-button-next",
        prevEl: ".modelsellers-button-prev",
    },
    pagination: {
        el: ".modelsellers-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});






let specialSwiper = new Swiper(".special-offers__slider", {
    slidesPerView: 3,
    spaceBetween: 15,
    navigation: {
        nextEl: ".special-button-next",
        prevEl: ".special-button-prev",
    },
    pagination: {
        el: ".special-pagination",
        clickable: true,
    },
    breakpoints: {

        '1180': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});











let interestedSwiper = new Swiper(".interested__slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: ".interested-button-next",
        prevEl: ".interested-button-prev",
    },
    pagination: {
        el: ".interested-pagination",
        clickable: true,
    },
    breakpoints: {
        '1399': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});









let expectAmountSwiper = new Swiper(".expect-amount__slider", {
    slidesPerView: 5,
    spaceBetween: 24,
    navigation: {
        nextEl: ".expect-amount-button-next",
        prevEl: ".expect-amount-button-prev",
    },
    pagination: {
        el: ".expect-amount-pagination",
        clickable: true,
    },
    breakpoints: {
        '1399': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});





let clientsSwiper = new Swiper(".clients-look__slider", {
    slidesPerView: 11,
    spaceBetween: 24,
    navigation: {
        nextEl: ".clients-look-button-next",
        prevEl: ".clients-look-button-prev",
    },
    breakpoints: {
        '1599': {
            slidesPerView: 11,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 8,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});

let popReviewsSwiper = new Swiper(".pop-reviews__slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".pop-reviews-button-next",
        prevEl: ".pop-reviews-button-prev",
    },
    pagination: {
        el: ".pop-reviews-pagination",
        clickable: true,
    },
    breakpoints: {
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
        '575': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});






let aboutBrandsSwiper = new Swiper(".about-brands__slider", {
    slidesPerView: 5,
    spaceBetween: 24,
    navigation: {
        nextEl: ".about-brand-button-next",
        prevEl: ".about-brand-button-prev",
    },
    pagination: {
        el: ".about-brands-pagination",
        clickable: true,
    },
    breakpoints: {
        '1399': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});



let otherRevSwiper = new Swiper(".other-rev-about__slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".other-rev-button-next",
        prevEl: ".other-rev-button-prev",
    },
    pagination: {
        el: ".other-rev-pagination",
        clickable: true,
    },
    breakpoints: {
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});

let texiPageSwiper = new Swiper(".taxi-page__slider", {
    slidesPerView: 1,
    spaceBetween: 3,
    speed: 500,
    pagination: {
        el: ".taxi-page-pagination",
        clickable: true,
    },


});













let partnerbankSwiper = new Swiper(".partner-bank__slider", {
    slidesPerView: 6,
    grid: {
        rows: 2,
    },
    spaceBetween: 70,
    pagination: {
        el: ".partner-bank-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".partner-bank-next",
        prevEl: ".partner-bank-prev",
    },
    breakpoints: {
        '1599': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 70,
            grid: {
                rows: 2,
            },
        },
        '1399': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 50,
            grid: {
                rows: 2,
            },
        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 50,
            grid: {
                rows: 2,
            },
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
            grid: {
                rows: 2,
            },
        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30,
            grid: {
                rows: 2,
            },
        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 24,

            grid: {
                rows: 2,
            },
        },
    },

});









let cardSwiper = new Swiper(".card-page-sm__slider", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    watchSlidesProgress: true,
    freeMode: true,
});
let cardSwiper2 = new Swiper(".card-page__slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".card-page-next",
        prevEl: ".card-page-prev",
    },
    thumbs: {
        swiper: cardSwiper,
    },
});












let blogEqSwiper = new Swiper(".blog-equip-sm__slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    watchSlidesProgress: true,

    direction: "vertical",
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        '300': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
            direction: "horizontal",

        },
    },
});
let blogEqSwiper2 = new Swiper(".blog-equip__slider", {
    spaceBetween: 2,
    thumbs: {
        swiper: blogEqSwiper,
    },
    navigation: {
        nextEl: ".blog-equip-button-next",
        prevEl: ".blog-equip-button-prev",
    },
});

















let recbestsellersSwiper = new Swiper(".rec-bestsellers__slider", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: ".rec-bestsellers-button-next",
        prevEl: ".rec-bestsellers-button-prev",
    },
    pagination: {
        el: ".rec-bestsellers-pagination",
        clickable: true,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});
