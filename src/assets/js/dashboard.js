
    $(document).ready(function () {
        
        // ------------------------------------------------------- //
        // Custom Scrollbar
        // ------------------------------------------------------ //

        if ($(window).outerWidth() > 992) {
            $("nav.side-navbar").mCustomScrollbar({
                scrollInertia: 200,
                autoHideScrollbar: true,
                // theme:"minimal-dark",,
                setRight: 0,
                setTop: 0
            });
        }

        // Main Template Color
        var brandPrimary = '#33b35a ';

        // ------------------------------------------------------- //
        // Side Navbar Functionality
        // ------------------------------------------------------ //
        $('#toggle-btn').on('click', function (e) {

            e.preventDefault();

            if ($(window).outerWidth() > 1194) {
                $('nav.side-navbar').toggleClass('shrink');
                $('.page').toggleClass('active');
            } else {
                $('nav.side-navbar').toggleClass('show-sm');
                $('.page').toggleClass('active-sm');
            }
        });
    });