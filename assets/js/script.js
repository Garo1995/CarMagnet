$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});


$('.open-catalog').on('click', function () {
    $(this).parent().toggleClass('open-catalog__act')
    $('.menu__fix').toggleClass('menu-fix__act')
});


$('.open-menu').on('click', function () {
    $(this).toggleClass('close-menu')
    $('body').toggleClass('body__fix')
    $('.menu__fix').toggleClass('menu-fix__act')
});





$('.list-car__click').on('click', function () {
    $(this).parents('.list-car__box').toggleClass('list-car__act');
})


$('.selection-click').on('click', function () {
    $(this).parents('.car-selection__qwe').find('.selection-click').removeClass('selection-click__act');
    $(this).addClass('selection-click__act');
});


if ($(".catalog__menu>ul>li").has("submenu")) {
    $(".submenu").parent().addClass("submenu__act");
}

$('.all-parameters').on('click', function () {
    $('.none-parameters').toggleClass('parameters-act__block')
});


$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();
});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100)

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});

$('.browse-brand').on('click', function () {
    $(this).parent().toggleClass('browse-brand__act')
})




$(document).ready(function () {

    addActiveClass('reviews-min-text-hrefs', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');

    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    });

    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();

    }

    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }

    //   change case block with click  case menu
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({visible: 'hidden', overflow: 'hidden', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({visible: 'visible', height: 'auto'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({visible: 'visible', height: 'auto'});

                }
            })
        }
    }



    addActiveClass('stock-min-text-hrefs', 'stock-href');
    changeCaseBlock(this, 'stock-min-text-hrefs', 'stock-min-info', 'stock-href', 'stock-reviews');

    $('.stock-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'stock-min-text-hrefs', 'stock-href')
        changeCaseBlock(this, 'stock-min-text-hrefs', 'stock-min-info', 'stock-href', 'stock-reviews');
    });


    addActiveClass('bestsellers-min-text-hrefs', 'bestsellers-href');
    changeCaseBlock(this, 'bestsellers-min-text-hrefs', 'bestsellers-min-info', 'bestsellers-href', 'bestsellers-reviews');

    $('.bestsellers-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'bestsellers-min-text-hrefs', 'bestsellers-href')
        changeCaseBlock(this, 'bestsellers-min-text-hrefs', 'bestsellers-min-info', 'bestsellers-href', 'bestsellers-reviews');
    });





    addActiveClass('card-page__links', 'card-active');
    changeCaseBlock(this, 'card-page__links', 'card-info-char', 'card-active', 'card-info-click');

    $('.card-info-click').on('click', function () {
        changeActiveClassWithClick(this, 'card-page__links', 'card-active')
        changeCaseBlock(this, 'card-page__links', 'card-info-char', 'card-active', 'card-info-click');
    });





});




$('.equipment-arrow').on('click', function () {
    $(this).parent().toggleClass('equipment__active')
});


$('.param-ection__click').on('click', function () {
    $('.param-ection__click').removeClass('param-ection__act')
    $(this).addClass('param-ection__act')
});




$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this), $next = $this.next();

        $next.slideToggle();


        if (!e.data.multiple) {

            $el.find('.submenu-accordion').not($next).slideUp();
        }

        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    var accordion = new Accordion($('#accordion'), false);
});



$('.open-all-programs').on('click', function () {
    $('.spec-programs__box').removeClass('programs-none__mob')
})



$('.category__click').on('click', function () {
    $('.category__click').removeClass('category-col-active')
    $(this).addClass('category-col-active');
})


$('.term-months-click').on('click', function () {
    $('.term-months-click').removeClass('months-act')
    $(this).addClass('months-act');
})


$('.initial-fee-click').on('click', function () {
    $('.initial-fee-click').removeClass('initial-fee-act')
    $(this).addClass('initial-fee-act');
})

$('.districts__href').on('click', function () {
    $('.districts__href').removeClass('districts__act')
    $(this).addClass('districts__act');
})



$('.available-mob__open').on('click', function () {
    $('.available__href').toggleClass('available-href__mob')
})

$('.btn-sale-car').on('click', function () {
    $(this).toggleClass('btn-sale-car__acts')
    $('.list-car__wrap').toggleClass('list-car__all')
})






$('.sorting-button').on('click', function () {
    $('.sorting-button').removeClass('sorting-cat__act')
    $(this).addClass('sorting-cat__act');
})



$('.sale-used-audi').on('click', function () {
    $('.sale-used-audi').removeClass('sale-used__act')
    $(this).addClass('sale-used__act');
})


$('.sale-issu__mod').on('click', function () {
    $('.sale-issu__mod').removeClass('sale-used__issu')
    $(this).addClass('sale-used__issu');
})
$('.sale-back__mod').on('click', function () {
    $('.sale-back__mod').removeClass('sale-used__color')
    $(this).addClass('sale-used__color');
})




$('.owners-from__data').on('click', function (e) {
    $(this).parent().toggleClass('owners-sel__acts');
    e.stopPropagation()
});

$('.owners-from__drop ul li').on('click', function () {
    var text_in = $('.owners-from__data').html();
    let selected_text = $(this).html();
    $('.owners-from__data').html(selected_text);
    $(this).html(text_in)
    $('.owners-from__sel').removeClass('owners-sel__acts')
});

$(window).on('click', function (e) {
    let menuSort = $('.owners-from__sel');
    if (e.target !== menuSort) {
        menuSort.removeClass('owners-sel__acts')
    }
});









$('.yes-or-no').on('click', function () {
    $('.yes-or-no').removeClass('yes-no__act')
    $(this).addClass('yes-no__act');
})
$('.yes-trade-in').on('click', function () {
    $('.yes-trade-in').removeClass('yes-no__act')
    $(this).addClass('yes-no__act');
})




$('.writing-pop__click').on('click', function () {

    $(this).parent().toggleClass('writing-pop__act');
})






$('.configurator__box').on('click', function () {
    $('.configurator__box').removeClass('config-check__act')
    $(this).addClass('config-check__act');
})



$('.remov-clas-config').on('click', function () {
    $('.configurator__box').removeClass('configurator-box__none')
});



$('.config-model__car').on('click', function () {
    $('.config-model__car').removeClass('config-model__acts')
    $(this).addClass('config-model__acts');
})



$('.btn-equip-click').on('click', function () {
    $('.btn-equip-click').removeClass('btn-choose__act')
    $(this).addClass('btn-choose__act');
})

$('.config-modific__click').on('click', function () {
    $('.config-modific__click').removeClass('btn-choose__act')
    $(this).addClass('btn-choose__act');
})
$('.config-color__click').on('click', function () {
    $('.config-color__click').removeClass('btn-choose__act')
    $(this).addClass('btn-choose__act');
})





let configurationParent = $('.configurator__main')

// configurator__checked
// configurator__act
if(configurationParent.length){

    const configTabs = $(configurationParent).find('.config-next-block')
    const configTabContents = $(configurationParent).find('.config-tab_content_js')
    const buttonsContent = $(configurationParent).find('.configurator-tab__btn')

    let activeTab = 0
    updateConfigTabsContent(activeTab)
    updateButtonsContent(activeTab)

    $('.configurator-tab__next').on('click',function (){
        if(activeTab<5){
            activeTab++
            updateConfigTabsContent(activeTab)
            updateButtonsContent(activeTab)
            updateConfigTab(activeTab)
        }
    })
    $('.configurator-tab__prev').on('click', function (){
        if(activeTab>0){
            activeTab--
            updateConfigTabsContent(activeTab)
            updateButtonsContent(activeTab)
            updateConfigTab(activeTab)
        }
    })

    function updateConfigTabsContent(active){
        if(configTabContents.length){
            configTabContents.each((index,item)=>{
                $(item).hide()
                if(index===active){
                    $(item).fadeIn()
                }
            })
        }
    }

    function updateButtonsContent(active){
       const buttonPrev =  $(buttonsContent).find('.configurator-tab__prev')
        const buttonShowMore = $(buttonsContent).find('.remov-clas-config')
        const buttonNext = $(buttonsContent).find('.configurator-tab__next')
        $(buttonPrev).hide()
        if(active>0 && buttonsContent.length){
            $(buttonsContent).addClass('config-kviz-btn')
            $(buttonPrev).show()
            $(buttonShowMore).hide()
        }else{
            $(buttonsContent).removeClass('config-kviz-btn')
            $(buttonPrev).hide()
            $(buttonShowMore).show()
        }
        if(active===5){
            $(buttonNext).hide()
        }else{
            $(buttonNext).show()
        }
    }

    function updateConfigTab(active){
        $(configTabs).each((index, item)=>{
            if(index<active){
                $(item).addClass('configurator__checked')
            }else{
                $(item).removeClass('configurator__checked')
            }
            $(item).removeClass('configurator__act')
            if(index===active){
                $(item).addClass('configurator__act')
            }
        })

    }

}



$('.available__href ul li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            var targetOffset = $target.offset().top-10;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});




const comparisonTabs = $('.comparison__check input')
if(comparisonTabs.length){
    $(comparisonTabs).each((index,item)=>{
        if($(item).attr('data-comparison')){
            let comparisonItems = $('.comparison-tab__scr').find("[data-comparison-item='" + $(item).attr('data-comparison') + "']")
            if(item.checked){
                $(comparisonItems).removeClass('hide-check')
            }else{
                $(comparisonItems).addClass('hide-check')
            }
        }
    })
    $(comparisonTabs).on('click',function (e){
        let currentComparison = $(this).attr('data-comparison')
        let comparisonItems = $('.comparison-tab__scr').find("[data-comparison-item='" + currentComparison + "']")
        if(e.target.checked){
            $(comparisonItems).removeClass('hide-check')
        }else{
            $(comparisonItems).addClass('hide-check')
        }
    })
}


const comparisonSpecTabs = $('.comparison__check__spec input')
if(comparisonTabs.length){
    $(comparisonSpecTabs).each((index,item)=>{
        if($(item).attr('data-comparison')){
            let comparisonItems = $('.checkmark-cnt_spec').find("[data-comparison-item='" + $(item).attr('data-comparison') + "']")
            if(item.checked){
                $(comparisonItems).show()
            }else{
                $(comparisonItems).hide()
            }
        }
    })
    $(comparisonSpecTabs).on('click',function (e){
        let currentComparison = $(this).attr('data-comparison')
        let comparisonItems = $('.comparison-tab__scr').find("[data-comparison-item='" + currentComparison + "']")
        if(e.target.checked){
            $(comparisonItems).show()
        }else{
            $(comparisonItems).hide()
        }
    })
}