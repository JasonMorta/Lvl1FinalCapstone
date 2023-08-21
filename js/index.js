$(document).ready(function () {

    let header1 = $(".featured-products h2");

    //animate the heading
    function animateHeader() {
        header1.animate({ "font-size": "2.5em" }, {
            duration: 200,
            complete: function() {
                header1.animate({ "font-size": "2em" }, {
                    duration: 2000,
                    complete: function() {
                        animateHeader(); // Trigger the animation again
                    }
                });
            }
        });
    }
    
    // Initial call to start the animation sequence
    animateHeader();

});