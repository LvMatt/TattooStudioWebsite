"use strict"

$(function () {

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };



  /**
   *
   * @function changeNavOnScroll
   *
   * @var scrollTop -> vrati kolko px užívatel scrollol od hora
   * @var offset -> kolko musí minimalne uživatel scrollnuť aby sa aplikoval class
   * @var className -> názov classu ktorý sa pridá ak užívatel scrollne viac ako je offset
   * @var nav -> element na ktorý sa prída className
   *
   */

  // ak užívatel reloadne stránku ale už má scrollnute tak sa automaticky nastavý class
  changeNavOnScroll();

  // každým scrollom sa updatuje funkcia
  $(window).scroll(changeNavOnScroll);

  function changeNavOnScroll() {

    var scrollTop = $(window).scrollTop();
    var nav = $('#mainNav')
    var offset = 100
    var className = 'active-background'

    if (scrollTop >= offset)
      nav.addClass(className);

    else
      nav.removeClass(className);

  }

})



Counter()


function Counter() {
  runCounter()



  function runCounter() {
      var runned = false

    count()
    $(window).scroll(count)
    function count() {
      var isInView = inView(document.querySelector('[data-counter-container]'))
      if(isInView && !runned) {
      runned = true
        $('[data-counter]').each(function(_, counter) {
        var $counter = $(counter)
        var from = parseFloat($counter.data('from'))
        var to = parseFloat($counter.data('to'))
        var speed = parseFloat($counter.data('speed'))
        var offset = parseFloat($counter.data('offset'))
        var actualValue = parseFloat($counter.text())

          var interval = setInterval(updateValue, speed)

          var value = from

          function updateValue() {
            value += offset

            $counter.text(value)

            if(value >= to) {
              $counter.text(to)
              clearInterval(interval)
            }
          }



      })
      }

    }

  }

  function inView(element) {
    var rect = element.getBoundingClientRect()
    var html = document.documentElement
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    )
  }

}
