$(document).ready(function () {

    // Hide the btns and text area on load
    $(".send").hide();
    $(".cancel").hide();
    $(".text-input").hide();

    // Change the button text to a check mark when clicked.
    function sent(e) {
        e.target.innerHTML = "✔";
    }

    // How the following element when first one is selected

    $(".email-input").click(() => {
        // show the text area
        $(".text-input").show(1000);
    })

    $(".text-input").click(() => {
        // show the button
        $(".send").show(1000);
        $(".cancel").show(1000);
    })

    //change btn text to a check mark
    $(".send").click((e) => e.target.innerHTML = "✔");

    //hide all elements chain effect
    $(".cancel").click((e) => {
        $(".send").show(1000);
        $(".cancel").show(1000, () => {
            $(".text-input").hide(1000, () => {
                $(".send").text("Send")
            });
        });
    });
});