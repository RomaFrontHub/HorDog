$(document).ready(function() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 4,
            }
        },

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

    const swiperTwo = new Swiper('.swiper-two', {
        // Optional parameters
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 4,
            }
        },

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-two',
            prevEl: '.swiper-button-prev-two',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

    const swiperThree = new Swiper('.swiper-three', {
        // Optional parameters
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 4,
            }
        },

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-three',
            prevEl: '.swiper-button-prev-three',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

    const swiperFour = new Swiper('.swiper-four', {
        // Optional parameters
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 4,
            }
        },

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-four',
            prevEl: '.swiper-button-prev-four',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

    const swiperFive = new Swiper('.swiper-five', {
        // Optional parameters
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 4,
            }
        },

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-five',
            prevEl: '.swiper-button-prev-five',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

    const swiperSix = new Swiper('.swiper-six', {
        // Optional parameters
        slidesPerView: 2,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 2,
            }
        },

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-six',
            prevEl: '.swiper-button-prev-six',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });

    const swiperSeven = new Swiper('.swiper-seven', {
        // Optional parameters
        slidesPerView: 5,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 4,
            }
        },

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-seven',
            prevEl: '.swiper-button-prev-seven',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });


    let modal = new tingle.modal({
        onClose: function() {
            console.log('close');
        },
        onOpen: function() {
            console.log('open');
        },
        closeMethods: [],
        closeLabel: "Close",
        beforeOpen: function() {
            console.log('before open');
        },
        beforeClose: function() {
            console.log('before close');
            return true;
        },
    });

    $('.click-modal').click(function() {
        modal.open();
    });


    modal.setContent($('.modal-content').html());

    // $(".toggle_mobile_btn").click(function() {
    //   $(".toggle_mobile_btn").toggleClass("on");
    //   $("body").toggleClass("body_menu");
    //   $("header").toggleClass("open_menu");
    //  return false;
    //    });

    /*

    (function($) {
      $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
        });
      });
    })(jQuery);




        $('.popup-link').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        });
    	
    	    $('.sert_slider').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

            }
        });
    	
    	*/



    //
});