AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    var swiperInsights, swiperEvents;

    $(window).on('load', function() {
      var windowWidth = $(window).width();

      if (windowWidth <= 767) {
        swiper();
      } 
    })

    $(window).on('resize', function() {
      var windowWidth = $(window).width();

      if(swiperInsights) {
        swiperInsights.destroy(1, 1);
        swiperInsights = undefined;

        swiperEvents.destroy(1, 1);
        swiperEvents = undefined;
      }

      if (windowWidth <= 767) {
        console.log(windowWidth);
        swiper();
      }
    })

    const swiper = function() {
      swiperInsights = new Swiper('#swiperInsights', {
        pagination: {
          el: '#swiperInsights .swiper-pagination',
        },
        paginationClickable: true,
        slidesPerView: 'auto',
        slidesPerGroup: 1
      });
  
      swiperEvents = new Swiper('#swiperEvents', {
        pagination: {
          el: '#swiperEvents .swiper-pagination',
        },
        paginationClickable: true,
        slidesPerView: 'auto',
        slidesPerGroup: 1
      });
    }

    $('.navbar-toggler').on('click', function() {
      $('body').toggleClass('open');
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();
