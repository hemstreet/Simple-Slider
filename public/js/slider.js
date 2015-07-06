(function ($) {

    $(document).ready(function () {

        // Setup variables
        var navs = $('.slider-nav.auto-open'),
            viewportHeight = $(window).height(),
            delay = 1000,
            onScroll = function () {

                // Calculating maximum height before anything needs to be shown
                var activationTop = viewportHeight + $(window).scrollTop();

                // Loops through each slider nav and checks if it has been displayed, if not, show it
                navs.each(function (index, nav) {

                    if (!nav.beenShown) {

                        // Calculate the position of the navigation and the point at which to show the slide
                        var top = $(nav).position().top;
                        if (top < activationTop) {
                            // Wait for delay until showing the nav / slide
                            setTimeout(function () {
                                $($('[data-slider-nav-key]', nav)[0]).click();
                            }, delay);
                            nav.beenShown = true;
                        }
                    }
                });
            };

        // Arrow navigation
        $('.slider-nav [data-slider-nav-direction]').on('click', function (e) {

            e.preventDefault();

            var direction   = $(this).attr('data-slider-nav-direction'),
                nav         = $(this).closest('.slider-nav'),
                navId       = nav.attr('data-slider-nav-id'),
                activeSlide = $('.slider-nav[data-slider-nav-id="' + navId + '"] .active-slide'),
                el          = activeSlide;

            if(direction == "next" && activeSlide.next().length > 0) {
                el = activeSlide.next();
            }
            else if(direction == "next") {
                el = $('[data-slider-nav-key]:first-of-type', activeSlide.parent());
            }
            else if(direction == "prev" && activeSlide.prev().length > 0) {
                el = activeSlide.prev();
            }
            else if(direction == "prev") {
                el = $('[data-slider-nav-key]:last-of-type', activeSlide.parent());
            }
            el.click();

        });


        // selects all nav items, and groups them to their respective content
        $('.slider-nav [data-slider-nav-key]').on('click', function () {

            var key        = $(this).attr('data-slider-nav-key'),
                parent     = $(this).closest('.slider-nav'),
                id         = $(parent).attr('data-slider-nav-id'),
                content    = $('.slider-content[data-slider-nav-id="' + id + '"] [data-slider-nav-key="' + key + '"]'),
                nav        = $('.slider-nav[data-slider-nav-id="' + id + '"] [data-slider-nav-key="' + key + '"]'),
                slide      = $('.slider-content[data-slider-nav=' + id + '] [data-slider-nav-key=' + key + ']'),
                toggleMode = parent.attr('data-toggle-mode'),
                hideOnly   = toggleMode && nav.hasClass('active-slide'),
                ignore     = $('.slider-content[data-slider-nav-id="' + id + '"] [data-slider-nav-key] [data-slider-nav-key]');

            // Clearing all active slides & navs
            $('.slider-content[data-slider-nav-id="' + id + '"] [data-slider-nav-key], .slider-nav[data-slider-nav-id="' + id + '"] [data-slider-nav-key]').not(ignore).removeClass('active-slide');

            // Set the selected elements class to active-slide
            if(!hideOnly) {
                var childNav      = $($(content).find('.slider-nav [data-slider-nav-key]')[0]),
                    hasActiveSlide = $(content).find('.slider-nav .active-slide').length > 0;

                if(childNav && !hasActiveSlide) {
                    $(childNav).click();
                }

                $(content).addClass('active-slide');
                $(nav).addClass('active-slide');
            }

        });
        // Sometimes when people load the page they jump partway down, this will make sure anything
        // that is visible on page load animates in
        onScroll();

        // Make sure we check if we need to show a nav when the user scrolls
        $(window).scroll(onScroll);

    });
}(jQuery));